// Databricks Technical Maturity Assessment Framework - Main Application
class DatabricksAssessment {
    constructor() {
        this.currentPillar = 'overview';
        this.assessmentData = {};
        this.userResponses = {};
        this.initializeApp();
    }

    initializeApp() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
                this.loadAssessmentData();
                this.updateProgress();
                this.renderContent(); // Ensure content is rendered on initialization
                this.testNavigationElements(); // Test navigation elements
            });
        } else {
            this.setupEventListeners();
            this.loadAssessmentData();
            this.updateProgress();
            this.renderContent(); // Ensure content is rendered on initialization
            this.testNavigationElements(); // Test navigation elements
        }
    }

    testNavigationElements() {
        console.log('Testing navigation elements...');
        const allPillars = document.querySelectorAll('[data-pillar]');
        console.log('Found navigation elements:', allPillars.length);
        allPillars.forEach((element, index) => {
            const pillar = element.getAttribute('data-pillar');
            console.log(`Element ${index}: ${pillar}`, element);
        });
        
        // Specifically test overview element
        const overviewElement = document.querySelector('[data-pillar="overview"]');
        if (overviewElement) {
            console.log('Overview element found:', overviewElement);
        } else {
            console.error('Overview element NOT found!');
        }
    }

    setupEventListeners() {
        // Sidebar navigation - use event delegation for better reliability
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-pillar]')) {
                e.preventDefault();
                const pillar = e.target.closest('[data-pillar]').getAttribute('data-pillar');
                console.log('Navigation clicked:', pillar); // Debug log
                this.navigateToPillar(pillar);
            }
        });

        // Save progress button
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-action="save-progress"]')) {
                this.showSaveProgressModal();
            }
        });
    }

    loadAssessmentData() {
        // Initialize user responses structure
        Object.keys(assessmentData.pillars).forEach(pillar => {
            this.userResponses[pillar] = {};
            Object.keys(assessmentData.pillars[pillar].dimensions).forEach(dimension => {
                this.userResponses[pillar][dimension] = {};
            });
        });
    }

    navigateToPillar(pillar) {
        console.log('Navigating to pillar:', pillar); // Debug log
        
        // Update active navigation
        document.querySelectorAll('[data-pillar]').forEach(item => {
            item.classList.remove('active');
        });
        
        const targetElement = document.querySelector(`[data-pillar="${pillar}"]`);
        if (targetElement) {
            targetElement.classList.add('active');
            console.log('Set active class on:', targetElement); // Debug log
        } else {
            console.error('Could not find element with data-pillar:', pillar); // Debug log
            // Try to find all elements with data-pillar attribute for debugging
            const allPillars = document.querySelectorAll('[data-pillar]');
            console.log('Available pillars:', Array.from(allPillars).map(el => el.getAttribute('data-pillar')));
        }

        // Update content
        this.currentPillar = pillar;
        this.renderContent();
    }

    renderContent() {
        const contentArea = document.getElementById('content-area');
        
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        if (this.currentPillar === 'overview') {
            const overviewElement = document.getElementById('overview-content');
            if (overviewElement) {
                overviewElement.style.display = 'block';
            }
        } else if (this.currentPillar === 'recommendations') {
            this.renderRecommendations();
        } else {
            this.renderAssessmentForm();
        }
    }

    renderAssessmentForm() {
        const pillar = assessmentData.pillars[this.currentPillar];
        const contentArea = document.getElementById('content-area');
        
        let html = `
            <div id="assessment-content" class="content-section">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h4><i class="${pillar.icon} me-2"></i>${pillar.name} Assessment</h4>
                            <p class="mb-0 text-muted">${pillar.description}</p>
                        </div>
                        <div>
                            <button class="btn btn-outline-primary" data-action="save-progress">
                                <i class="fas fa-save me-2"></i>Save Progress
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
        `;

        // Render each dimension
        Object.entries(pillar.dimensions).forEach(([dimensionKey, dimension]) => {
            html += this.renderDimension(dimensionKey, dimension);
        });

        html += `
                        <!-- Score Display -->
                        <div class="card mt-4">
                            <div class="card-header">
                                <h6><i class="fas fa-chart-bar me-2"></i>${pillar.name} Maturity Scores</h6>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="text-center">
                                            <h4 class="text-primary" id="${pillar}-current-score">0.0</h4>
                                            <p class="mb-0"><strong>Current State</strong></p>
                                            <small class="text-muted">Based on your current maturity selections</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="text-center">
                                            <h4 class="text-success" id="${pillar}-future-score">0.0</h4>
                                            <p class="mb-0"><strong>Future State</strong></p>
                                            <small class="text-muted">Based on your desired maturity selections</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <div class="progress" style="height: 8px;">
                                        <div class="progress-bar bg-primary" role="progressbar" id="${pillar}-current-progress" style="width: 0%"></div>
                                        <div class="progress-bar bg-success" role="progressbar" id="${pillar}-future-progress" style="width: 0%"></div>
                                    </div>
                                    <div class="d-flex justify-content-between mt-1">
                                        <small class="text-muted">Initial (1.0)</small>
                                        <small class="text-muted">Optimized (5.0)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-4">
                            <button class="btn btn-primary btn-lg" onclick="assessment.submitPillarAssessment()">
                                <i class="fas fa-check me-2"></i>Submit ${pillar.name} Assessment
                            </button>
                            <button class="btn btn-outline-primary btn-lg ms-2" onclick="assessment.navigateToRecommendations()">
                                <i class="fas fa-lightbulb me-2"></i>View Recommendations
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        document.getElementById('assessment-content').style.display = 'block';
        
        // Update scores for the current pillar
        this.updatePillarScores(pillar.name.toLowerCase().replace(' ', '-'));
    }

    renderDimension(dimensionKey, dimension) {
        let html = `
            <div class="assessment-section">
                <div class="dimension-header">
                    <h5><i class="fas fa-layer-group me-2"></i>${dimension.name}</h5>
                </div>
        `;

        dimension.questions.forEach((question, index) => {
            html += this.renderQuestion(question, index + 1);
        });

        html += '</div>';
        return html;
    }

    renderQuestion(question, questionNumber) {
        const questionId = `${this.currentPillar}_${question.id}`;
        
        let html = `
            <div class="card question-card">
                <div class="card-body">
                    <div class="d-flex align-items-start mb-3">
                        <div class="question-number me-3">${questionNumber}</div>
                        <div class="flex-grow-1">
                            <h6 class="question-text">${question.text}</h6>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Current Maturity State</label>
                                <select class="form-select" id="${questionId}_current" onchange="assessment.updateProgress()">
                                    <option value="">Select current state</option>
                                    ${maturityLevels.map(level => 
                                        `<option value="${level.value}">${level.label} - ${level.description}</option>`
                                    ).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Desired Maturity State</label>
                                <select class="form-select" id="${questionId}_desired" onchange="assessment.updateProgress()">
                                    <option value="">Select desired state</option>
                                    ${maturityLevels.map(level => 
                                        `<option value="${level.value}">${level.label} - ${level.description}</option>`
                                    ).join('')}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pain-points-section">
                        <h6><i class="fas fa-exclamation-triangle me-2"></i>Technical Pain Points</h6>
                        <div class="row">
                            ${question.technicalPainPoints.map((painPoint, index) => `
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                               id="${questionId}_tech_${index}" 
                                               value="${painPoint}">
                                        <label class="form-check-label" for="${questionId}_tech_${index}">
                                            ${painPoint}
                                        </label>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <h6 class="mt-3"><i class="fas fa-briefcase me-2"></i>Business Pain Points</h6>
                        <div class="row">
                            ${question.businessPainPoints.map((painPoint, index) => `
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                               id="${questionId}_biz_${index}" 
                                               value="${painPoint}">
                                        <label class="form-check-label" for="${questionId}_biz_${index}">
                                            ${painPoint}
                                        </label>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    updateProgress() {
        let totalQuestions = 0;
        let completedQuestions = 0;

        Object.keys(assessmentData.pillars).forEach(pillar => {
            const pillarQuestions = this.getPillarQuestionCount(pillar);
            const pillarCompleted = this.getPillarCompletedCount(pillar);
            
            totalQuestions += pillarQuestions;
            completedQuestions += pillarCompleted;

            // Calculate pillar scores
            const scores = this.calculatePillarScores(pillar);
            
            // Update pillar progress with scores
            const progressElement = document.getElementById(`${pillar}-progress`);
            if (progressElement) {
                if (scores.currentScore > 0 || scores.futureScore > 0) {
                    progressElement.innerHTML = `
                        <div class="small">
                            <div>Current: ${scores.currentScore}/5</div>
                            <div>Future: ${scores.futureScore}/5</div>
                        </div>
                    `;
                    progressElement.className = 'badge bg-info float-end';
                } else {
                    progressElement.textContent = `${pillarCompleted}/${pillarQuestions}`;
                    progressElement.className = pillarCompleted === pillarQuestions ? 
                        'badge bg-success float-end' : 'badge bg-secondary float-end';
                }
            }
            
            // Update pillar score displays if they exist
            this.updatePillarScores(pillar);
        });

        // Update overall progress
        const overallProgress = document.getElementById('overall-progress');
        const overallProgressText = document.getElementById('overall-progress-text');
        
        if (overallProgress && overallProgressText) {
            const percentage = totalQuestions > 0 ? (completedQuestions / totalQuestions) * 100 : 0;
            overallProgress.style.width = `${percentage}%`;
            overallProgressText.textContent = `${completedQuestions} of ${totalQuestions} questions completed`;
        }
    }

    getPillarQuestionCount(pillar) {
        if (!assessmentData.pillars[pillar]) return 0;
        
        let count = 0;
        Object.values(assessmentData.pillars[pillar].dimensions).forEach(dimension => {
            count += dimension.questions.length;
        });
        return count;
    }

    getPillarCompletedCount(pillar) {
        let completed = 0;
        
        if (!assessmentData.pillars[pillar]) return 0;
        
        Object.values(assessmentData.pillars[pillar].dimensions).forEach(dimension => {
            dimension.questions.forEach(question => {
                const questionId = `${pillar}_${question.id}`;
                const currentSelect = document.getElementById(`${questionId}_current`);
                const desiredSelect = document.getElementById(`${questionId}_desired`);
                
                // Count as completed if either current or desired is selected
                if (currentSelect && desiredSelect && 
                    (currentSelect.value || desiredSelect.value)) {
                    completed++;
                }
            });
        });
        
        return completed;
    }

    calculatePillarScores(pillar) {
        if (!assessmentData.pillars[pillar]) return { currentScore: 0, futureScore: 0 };
        
        let currentTotal = 0;
        let futureTotal = 0;
        let currentCount = 0;
        let futureCount = 0;
        
        Object.values(assessmentData.pillars[pillar].dimensions).forEach(dimension => {
            dimension.questions.forEach(question => {
                const questionId = `${pillar}_${question.id}`;
                const currentSelect = document.getElementById(`${questionId}_current`);
                const desiredSelect = document.getElementById(`${questionId}_desired`);
                
                // Calculate current score
                if (currentSelect && currentSelect.value) {
                    const currentLevel = maturityLevels.findIndex(level => level.value === currentSelect.value);
                    currentTotal += currentLevel + 1; // Convert 0-based index to 1-based score
                    currentCount++;
                }
                
                // Calculate future score
                if (desiredSelect && desiredSelect.value) {
                    const futureLevel = maturityLevels.findIndex(level => level.value === desiredSelect.value);
                    futureTotal += futureLevel + 1; // Convert 0-based index to 1-based score
                    futureCount++;
                }
            });
        });
        
        return {
            currentScore: currentCount > 0 ? Math.round((currentTotal / currentCount) * 10) / 10 : 0,
            futureScore: futureCount > 0 ? Math.round((futureTotal / futureCount) * 10) / 10 : 0
        };
    }

    updatePillarScores(pillar) {
        const scores = this.calculatePillarScores(pillar);
        
        // Update score displays
        const currentScoreElement = document.getElementById(`${pillar}-current-score`);
        const futureScoreElement = document.getElementById(`${pillar}-future-score`);
        const currentProgressElement = document.getElementById(`${pillar}-current-progress`);
        const futureProgressElement = document.getElementById(`${pillar}-future-progress`);
        
        if (currentScoreElement) {
            currentScoreElement.textContent = scores.currentScore.toFixed(1);
        }
        
        if (futureScoreElement) {
            futureScoreElement.textContent = scores.futureScore.toFixed(1);
        }
        
        if (currentProgressElement) {
            const currentPercentage = (scores.currentScore / 5) * 100;
            currentProgressElement.style.width = `${currentPercentage}%`;
        }
        
        if (futureProgressElement) {
            const futurePercentage = (scores.futureScore / 5) * 100;
            futureProgressElement.style.width = `${futurePercentage}%`;
        }
    }

    submitPillarAssessment() {
        const pillar = this.currentPillar;
        const responses = this.collectPillarResponses(pillar);
        
        // Store responses (no validation required - partial completion is allowed)
        this.userResponses[pillar] = responses;
        
        // Show success message with recommendation option
        this.showSuccessMessage(`${assessmentData.pillars[pillar].name} assessment submitted successfully!`);
        
        // Show recommendation modal for this pillar
        this.showPillarRecommendationsModal(pillar);
    }

    collectPillarResponses(pillar) {
        const responses = {};
        
        Object.entries(assessmentData.pillars[pillar].dimensions).forEach(([dimensionKey, dimension]) => {
            responses[dimensionKey] = {};
            
            dimension.questions.forEach(question => {
                const questionId = `${pillar}_${question.id}`;
                const currentSelect = document.getElementById(`${questionId}_current`);
                const desiredSelect = document.getElementById(`${questionId}_desired`);
                
                // Collect technical pain points
                const technicalPainPoints = [];
                question.technicalPainPoints.forEach((painPoint, index) => {
                    const checkbox = document.getElementById(`${questionId}_tech_${index}`);
                    if (checkbox && checkbox.checked) {
                        technicalPainPoints.push(painPoint);
                    }
                });
                
                // Collect business pain points
                const businessPainPoints = [];
                question.businessPainPoints.forEach((painPoint, index) => {
                    const checkbox = document.getElementById(`${questionId}_biz_${index}`);
                    if (checkbox && checkbox.checked) {
                        businessPainPoints.push(painPoint);
                    }
                });
                
                responses[dimensionKey][question.id] = {
                    current: currentSelect ? currentSelect.value : '',
                    desired: desiredSelect ? desiredSelect.value : '',
                    technicalPainPoints: technicalPainPoints,
                    businessPainPoints: businessPainPoints
                };
            });
        });
        
        return responses;
    }

    navigateToNextPillar() {
        const pillars = ['platform', 'data', 'ml', 'genai'];
        const currentIndex = pillars.indexOf(this.currentPillar);
        
        if (currentIndex < pillars.length - 1) {
            // Navigate to next pillar
            this.navigateToPillar(pillars[currentIndex + 1]);
        } else {
            // All pillars completed, navigate to recommendations
            this.navigateToPillar('recommendations');
        }
    }

    // Add method to allow direct navigation to recommendations
    navigateToRecommendations() {
        this.navigateToPillar('recommendations');
    }

    showPillarRecommendationsModal(pillar) {
        const pillarData = assessmentData.pillars[pillar];
        const responses = this.userResponses[pillar];
        const scores = this.calculatePillarScores(pillar);
        
        // Update modal title
        document.getElementById('pillarModalTitle').innerHTML = `
            <i class="${pillarData.icon} me-2"></i>${pillarData.name} Recommendations
        `;
        
        // Generate modal content
        let html = `
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="text-center">
                        <h4 class="text-primary">${scores.currentScore.toFixed(1)}/5</h4>
                        <p class="mb-0"><strong>Current State</strong></p>
                        <small class="text-muted">Based on your selections</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-center">
                        <h4 class="text-success">${scores.futureScore.toFixed(1)}/5</h4>
                        <p class="mb-0"><strong>Future State</strong></p>
                        <small class="text-muted">Based on your selections</small>
                    </div>
                </div>
            </div>
        `;
        
        // Generate recommendations for this pillar
        const gaps = this.analyzePillarGaps(responses);
        
        if (gaps.length > 0) {
            html += `
                <h6><i class="fas fa-chart-line me-2"></i>Key Recommendations</h6>
                <div class="row">
            `;
            
            gaps.slice(0, 4).forEach(gap => { // Show top 4 gaps
                html += this.generateGapRecommendation(gap, pillar);
            });
            
            html += `</div>`;
            
            if (gaps.length > 4) {
                html += `
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-info-circle me-2"></i>
                        ${gaps.length - 4} more recommendations available. View all recommendations for complete analysis.
                    </div>
                `;
            }
        } else {
            html += `
                <div class="alert alert-success">
                    <h6><i class="fas fa-check-circle me-2"></i>Great Progress!</h6>
                    <p class="mb-0">No significant gaps identified in this pillar. Your current and desired states are well aligned.</p>
                </div>
            `;
        }
        
        // Update modal body
        document.getElementById('pillarModalBody').innerHTML = html;
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('pillarRecommendationsModal'));
        modal.show();
    }

    analyzePillarGaps(responses) {
        const gaps = [];
        
        Object.entries(responses).forEach(([dimensionKey, dimensionResponses]) => {
            Object.entries(dimensionResponses).forEach(([questionId, response]) => {
                // Handle partial responses
                if (response.current || response.desired) {
                    const currentLevel = response.current ? 
                        maturityLevels.findIndex(level => level.value === response.current) : 0;
                    const desiredLevel = response.desired ? 
                        maturityLevels.findIndex(level => level.value === response.desired) : 
                        maturityLevels.length - 1;
                    
                    const gap = desiredLevel - currentLevel;
                    
                    // Only include responses where desired >= current (no simplification allowed)
                    if (gap >= 0) {
                        gaps.push({
                            questionId: questionId,
                            current: response.current || 'initial',
                            desired: response.desired || 'optimized',
                            gap: gap,
                            technicalPainPoints: response.technicalPainPoints || [],
                            businessPainPoints: response.businessPainPoints || [],
                            partialResponse: !response.current || !response.desired,
                            isMaintenance: gap === 0
                        });
                    }
                }
            });
        });
        
        // Sort by gap size (largest gaps first), then by maintenance status
        return gaps.sort((a, b) => {
            if (a.gap === 0 && b.gap > 0) return 1; // Maintenance after improvements
            if (a.gap > 0 && b.gap === 0) return -1; // Improvements before maintenance
            return b.gap - a.gap; // Then by gap size
        });
    }

    continueToNextPillar() {
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('pillarRecommendationsModal'));
        modal.hide();
        
        // Navigate to next pillar
        this.navigateToNextPillar();
    }

    renderRecommendations() {
        const contentArea = document.getElementById('content-area');
        
        // Check if there are any responses
        const hasResponses = Object.keys(this.userResponses).some(pillar => 
            this.userResponses[pillar] && Object.keys(this.userResponses[pillar]).length > 0
        );

        let html = `
            <div id="recommendations-content" class="content-section">
                <div class="card">
                    <div class="card-header">
                        <h4><i class="fas fa-lightbulb me-2"></i>Recommendations & Action Plan</h4>
                        <p class="mb-0 text-muted">Based on your assessment responses, here are tailored recommendations to help you achieve your desired maturity state.</p>
                    </div>
                    <div class="card-body">
        `;

        if (!hasResponses) {
            html += `
                <div class="alert alert-info">
                    <h5><i class="fas fa-info-circle me-2"></i>No Assessment Data Available</h5>
                    <p>You haven't completed any pillar assessments yet. To generate recommendations:</p>
                    <ul>
                        <li>Complete one or more pillar assessments</li>
                        <li>You don't need to answer all questions - partial completion is allowed</li>
                        <li>Submit each pillar to include it in your recommendations</li>
                    </ul>
                    <div class="mt-3">
                        <button class="btn btn-primary" onclick="assessment.navigateToPillar('platform')">
                            <i class="fas fa-play me-2"></i>Start Assessment
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Generate overall score summary
            html += this.generateOverallScoreSummary();
            
            // Generate recommendations for each pillar with responses
            Object.keys(assessmentData.pillars).forEach(pillar => {
                if (this.userResponses[pillar] && Object.keys(this.userResponses[pillar]).length > 0) {
                    html += this.generatePillarRecommendations(pillar);
                }
            });

            html += `
                <div class="alert alert-success mt-4">
                    <h6><i class="fas fa-check-circle me-2"></i>Assessment Summary</h6>
                    <p class="mb-0">Recommendations generated based on ${Object.keys(this.userResponses).filter(p => 
                        this.userResponses[p] && Object.keys(this.userResponses[p]).length > 0
                    ).length} completed pillar(s). You can continue completing other pillars and regenerate recommendations.</p>
                </div>
            `;
        }

        html += `
                        <div class="text-center mt-4">
                            <button class="btn btn-primary btn-lg" onclick="assessment.exportRecommendations()" ${!hasResponses ? 'disabled' : ''}>
                                <i class="fas fa-download me-2"></i>Export Recommendations
                            </button>
                            ${hasResponses ? `
                                <button class="btn btn-outline-primary btn-lg ms-2" onclick="assessment.navigateToPillar('platform')">
                                    <i class="fas fa-plus me-2"></i>Continue Assessment
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        document.getElementById('recommendations-content').style.display = 'block';
    }

    generatePillarRecommendations(pillar) {
        const pillarData = assessmentData.pillars[pillar];
        const responses = this.userResponses[pillar];
        
        let html = `
            <div class="recommendation-card card mb-4">
                <div class="card-header">
                    <h5><i class="${pillarData.icon} me-2"></i>${pillarData.name} Recommendations</h5>
                </div>
                <div class="card-body">
        `;

        // Analyze gaps and generate recommendations
        Object.entries(responses).forEach(([dimensionKey, dimensionResponses]) => {
            const dimension = pillarData.dimensions[dimensionKey];
            const gaps = this.analyzeGaps(dimensionResponses);
            
            if (gaps.length > 0) {
                html += `
                    <div class="mb-4">
                        <h6><i class="fas fa-layer-group me-2"></i>${dimension.name}</h6>
                        <div class="row">
                `;
                
                gaps.forEach(gap => {
                    html += this.generateGapRecommendation(gap, pillar);
                });
                
                html += `
                        </div>
                    </div>
                `;
            }
        });

        html += `
                </div>
            </div>
        `;
        
        return html;
    }

    analyzeGaps(dimensionResponses) {
        const gaps = [];
        
        Object.entries(dimensionResponses).forEach(([questionId, response]) => {
            // Handle partial responses - if only one is provided, assume gap of 1
            if (response.current || response.desired) {
                const currentLevel = response.current ? 
                    maturityLevels.findIndex(level => level.value === response.current) : 0;
                const desiredLevel = response.desired ? 
                    maturityLevels.findIndex(level => level.value === response.desired) : 
                    maturityLevels.length - 1;
                
                // If only current is provided, assume desired is optimized
                // If only desired is provided, assume current is initial
                const gap = desiredLevel - currentLevel;
                
                // Only include responses where desired >= current (no simplification allowed)
                if (gap >= 0) {
                    gaps.push({
                        questionId: questionId,
                        current: response.current || 'initial',
                        desired: response.desired || 'optimized',
                        gap: gap,
                        technicalPainPoints: response.technicalPainPoints || [],
                        businessPainPoints: response.businessPainPoints || [],
                        partialResponse: !response.current || !response.desired,
                        isMaintenance: gap === 0   // Flag for maintenance scenarios
                    });
                }
            }
        });
        
        // Sort by gap size (largest gaps first), then by maintenance status
        return gaps.sort((a, b) => {
            if (a.gap === 0 && b.gap > 0) return 1; // Maintenance after improvements
            if (a.gap > 0 && b.gap === 0) return -1; // Improvements before maintenance
            return b.gap - a.gap; // Then by gap size
        });
    }

    generateOverallScoreSummary() {
        let html = `
            <div class="card mb-4">
                <div class="card-header">
                    <h5><i class="fas fa-chart-bar me-2"></i>Overall Maturity Score Summary</h5>
                </div>
                <div class="card-body">
                    <div class="row">
        `;
        
        let overallCurrentTotal = 0;
        let overallFutureTotal = 0;
        let pillarCount = 0;
        
        Object.keys(assessmentData.pillars).forEach(pillar => {
            if (this.userResponses[pillar] && Object.keys(this.userResponses[pillar]).length > 0) {
                const scores = this.calculatePillarScores(pillar);
                const pillarData = assessmentData.pillars[pillar];
                
                overallCurrentTotal += scores.currentScore;
                overallFutureTotal += scores.futureScore;
                pillarCount++;
                
                html += `
                    <div class="col-md-6 col-lg-4 mb-3">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <i class="${pillarData.icon} fa-2x text-primary mb-2"></i>
                                <h6>${pillarData.name}</h6>
                                <div class="mb-2">
                                    <span class="badge bg-primary me-1">Current: ${scores.currentScore.toFixed(1)}/5</span>
                                    <span class="badge bg-success">Future: ${scores.futureScore.toFixed(1)}/5</span>
                                </div>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-primary" style="width: ${(scores.currentScore/5)*100}%"></div>
                                    <div class="progress-bar bg-success" style="width: ${(scores.futureScore/5)*100}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        
        if (pillarCount > 0) {
            const overallCurrent = (overallCurrentTotal / pillarCount).toFixed(1);
            const overallFuture = (overallFutureTotal / pillarCount).toFixed(1);
            
            html += `
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="text-center">
                                <h3 class="text-primary">${overallCurrent}/5</h3>
                                <p class="mb-0"><strong>Overall Current State</strong></p>
                                <small class="text-muted">Average across ${pillarCount} completed pillar(s)</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center">
                                <h3 class="text-success">${overallFuture}/5</h3>
                                <p class="mb-0"><strong>Overall Future State</strong></p>
                                <small class="text-muted">Average across ${pillarCount} completed pillar(s)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } else {
            html += `
                    </div>
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Complete at least one pillar assessment to see overall scores.
                    </div>
                </div>
            </div>
            `;
        }
        
        return html;
    }

    generateGapRecommendation(gap, pillar) {
        let priority, priorityClass, gapType, gapIcon;
        
        if (gap.isMaintenance) {
            priority = 'maintenance';
            priorityClass = 'priority-maintenance';
            gapType = 'Maintenance';
            gapIcon = 'fas fa-equals';
        } else {
            priority = gap.gap >= 3 ? 'high' : gap.gap >= 2 ? 'medium' : 'low';
            priorityClass = `priority-${priority}`;
            gapType = 'Improvement';
            gapIcon = 'fas fa-arrow-up';
        }
        
        let html = `
            <div class="col-md-6 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="card-title">${gapType} Analysis</h6>
                            <span class="recommendation-priority ${priorityClass}">
                                <i class="${gapIcon} me-1"></i>${gapType}
                            </span>
                        </div>
                        <p class="card-text">
                            <strong>Current:</strong> ${maturityLevels.find(l => l.value === gap.current)?.label}${gap.partialResponse && !gap.current ? ' (assumed)' : ''}<br>
                            <strong>Desired:</strong> ${maturityLevels.find(l => l.value === gap.desired)?.label}${gap.partialResponse && !gap.desired ? ' (assumed)' : ''}
                            ${gap.partialResponse ? '<br><small class="text-muted"><i class="fas fa-info-circle me-1"></i>Partial response - complete assessment for more accurate recommendations</small>' : ''}
                        </p>
        `;
        
        if (gap.isMaintenance) {
            html += `
                        <div class="mb-2">
                            <strong>Maintenance Strategy:</strong><br>
                            <span class="badge bg-info">Current State Maintained</span>
                            <span class="badge bg-info">Stable Operations</span>
                        </div>
                        <div class="mb-2">
                            <strong>Key Benefits:</strong>
                            <ul class="small">
                                <li>Stable and reliable operations</li>
                                <li>Consistent performance levels</li>
                                <li>Reduced change management overhead</li>
                                <li>Focus on optimization rather than transformation</li>
                            </ul>
                        </div>
            `;
        } else {
            html += `
                        <div class="mb-2">
                            <strong>Recommended Tools:</strong><br>
                            ${this.getRecommendedTools(pillar, gap).map(tool => 
                                `<span class="tool-badge">${tool}</span>`
                            ).join('')}
                        </div>
                        <div class="mb-2">
                            <strong>Key Benefits:</strong>
                            <ul class="small">
                                ${this.getToolBenefits(pillar, gap).map(benefit => 
                                    `<li>${benefit}</li>`
                                ).join('')}
                            </ul>
                        </div>
            `;
        }
        
        html += `
                    </div>
                </div>
            </div>
        `;
        
        return html;
    }

    getRecommendedTools(pillar, gap) {
        if (!databricksTools[pillar]) return [];
        
        const tools = Object.values(databricksTools[pillar]);
        return tools.map(tool => tool.name);
    }

    getToolBenefits(pillar, gap) {
        if (!databricksTools[pillar]) return [];
        
        const tools = Object.values(databricksTools[pillar]);
        const allBenefits = tools.flatMap(tool => tool.benefits);
        
        // Return unique benefits
        return [...new Set(allBenefits)];
    }

    showSuccessMessage(message) {
        // Create and show a temporary success message
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    }

    showSaveProgressModal() {
        const modal = new bootstrap.Modal(document.getElementById('saveProgressModal'));
        modal.show();
    }

    saveProgress() {
        const assessmentName = document.getElementById('assessmentName').value;
        const organizationName = document.getElementById('organizationName').value;
        
        if (!assessmentName || !organizationName) {
            alert('Please fill in both assessment name and organization name.');
            return;
        }
        
        const progressData = {
            assessmentName: assessmentName,
            organizationName: organizationName,
            timestamp: new Date().toISOString(),
            responses: this.userResponses
        };
        
        // Save to localStorage
        localStorage.setItem('databricks-assessment-progress', JSON.stringify(progressData));
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('saveProgressModal'));
        modal.hide();
        
        this.showSuccessMessage('Assessment progress saved successfully!');
    }

    exportRecommendations() {
        // Generate and download recommendations report
        const reportData = {
            timestamp: new Date().toISOString(),
            responses: this.userResponses,
            recommendations: this.generateRecommendationsReport()
        };
        
        const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `databricks-assessment-recommendations-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generateRecommendationsReport() {
        // Generate comprehensive recommendations report
        const report = {};
        
        Object.keys(assessmentData.pillars).forEach(pillar => {
            if (this.userResponses[pillar] && Object.keys(this.userResponses[pillar]).length > 0) {
                report[pillar] = this.generatePillarRecommendationsReport(pillar);
            }
        });
        
        return report;
    }

    generatePillarRecommendationsReport(pillar) {
        // Generate detailed recommendations report for a pillar
        const responses = this.userResponses[pillar];
        const report = {
            pillar: assessmentData.pillars[pillar].name,
            dimensions: {}
        };
        
        Object.entries(responses).forEach(([dimensionKey, dimensionResponses]) => {
            const gaps = this.analyzeGaps(dimensionResponses);
            report.dimensions[dimensionKey] = {
                dimension: assessmentData.pillars[pillar].dimensions[dimensionKey].name,
                gaps: gaps,
                recommendations: gaps.map(gap => ({
                    questionId: gap.questionId,
                    priority: gap.gap >= 3 ? 'high' : gap.gap >= 2 ? 'medium' : 'low',
                    tools: this.getRecommendedTools(pillar, gap),
                    benefits: this.getToolBenefits(pillar, gap)
                }))
            };
        });
        
        return report;
    }
}

// Initialize the application
let assessment;
document.addEventListener('DOMContentLoaded', function() {
    assessment = new DatabricksAssessment();
});

// Global functions for HTML onclick handlers
function startAssessment() {
    assessment.navigateToPillar('platform');
}

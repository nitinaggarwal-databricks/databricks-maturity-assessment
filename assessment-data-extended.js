// Extended Assessment Data for ML and GenAI pillars
const extendedAssessmentData = {
    ml: {
        name: "Machine Learning",
        icon: "fas fa-brain",
        description: "Model development, training, deployment, and monitoring",
        dimensions: {
            development: {
                name: "Model Development & Training",
                questions: [
                    {
                        id: "ML1",
                        text: "How do you approach machine learning model development and experimentation?",
                        technicalPainPoints: [
                            "Manual model development",
                            "No experimentation framework",
                            "Limited model versioning",
                            "No automated training",
                            "Inconsistent development processes"
                        ],
                        businessPainPoints: [
                            "Development delays",
                            "Quality issues",
                            "Innovation barriers",
                            "Operational inefficiencies",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML2",
                        text: "What is your strategy for feature engineering and data preparation?",
                        technicalPainPoints: [
                            "Manual feature engineering",
                            "No feature store",
                            "Limited data preparation tools",
                            "Inconsistent feature creation",
                            "No feature versioning"
                        ],
                        businessPainPoints: [
                            "Development delays",
                            "Model quality issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility limitations"
                        ]
                    },
                    {
                        id: "ML3",
                        text: "How do you implement model training and hyperparameter optimization?",
                        technicalPainPoints: [
                            "Manual hyperparameter tuning",
                            "Limited training automation",
                            "No distributed training",
                            "Manual model selection",
                            "No training monitoring"
                        ],
                        businessPainPoints: [
                            "Training delays",
                            "Model quality issues",
                            "High computational costs",
                            "Operational inefficiencies",
                            "Innovation barriers"
                        ]
                    },
                    {
                        id: "ML4",
                        text: "What is your approach to model validation and testing?",
                        technicalPainPoints: [
                            "Limited validation framework",
                            "Manual testing processes",
                            "No automated validation",
                            "Limited test data management",
                            "No performance benchmarking"
                        ],
                        businessPainPoints: [
                            "Model quality risks",
                            "Deployment failures",
                            "Operational overhead",
                            "Business continuity risks",
                            "Customer impact"
                        ]
                    },
                    {
                        id: "ML5",
                        text: "How do you handle model versioning and experiment tracking?",
                        technicalPainPoints: [
                            "No model versioning",
                            "Manual experiment tracking",
                            "Limited reproducibility",
                            "No experiment comparison",
                            "Manual documentation"
                        ],
                        businessPainPoints: [
                            "Development inefficiencies",
                            "Quality issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Knowledge management gaps"
                        ]
                    }
                ]
            },
            deployment: {
                name: "Model Deployment & Serving",
                questions: [
                    {
                        id: "ML6",
                        text: "How do you deploy machine learning models to production?",
                        technicalPainPoints: [
                            "Manual deployment processes",
                            "No deployment automation",
                            "Limited deployment options",
                            "No rollback capabilities",
                            "Manual testing"
                        ],
                        businessPainPoints: [
                            "Deployment delays",
                            "Operational risks",
                            "Quality issues",
                            "Business continuity risks",
                            "Innovation barriers"
                        ]
                    },
                    {
                        id: "ML7",
                        text: "What is your approach to model serving and inference optimization?",
                        technicalPainPoints: [
                            "Limited serving capabilities",
                            "No inference optimization",
                            "Manual scaling",
                            "No performance monitoring",
                            "Limited serving options"
                        ],
                        businessPainPoints: [
                            "Performance issues",
                            "High operational costs",
                            "User experience problems",
                            "Scalability limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML8",
                        text: "How do you implement A/B testing and model comparison?",
                        technicalPainPoints: [
                            "No A/B testing framework",
                            "Manual model comparison",
                            "Limited experimentation",
                            "No statistical validation",
                            "Manual traffic routing"
                        ],
                        businessPainPoints: [
                            "Limited model optimization",
                            "Decision-making delays",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility limitations"
                        ]
                    },
                    {
                        id: "ML9",
                        text: "What is your strategy for model rollback and version management?",
                        technicalPainPoints: [
                            "No rollback capabilities",
                            "Manual version management",
                            "Limited deployment tracking",
                            "No automated rollback",
                            "Manual incident response"
                        ],
                        businessPainPoints: [
                            "Deployment risks",
                            "Extended downtime",
                            "Business continuity risks",
                            "Operational overhead",
                            "Customer impact"
                        ]
                    },
                    {
                        id: "ML10",
                        text: "How do you handle model scaling and load balancing?",
                        technicalPainPoints: [
                            "Manual scaling processes",
                            "No load balancing",
                            "Limited auto-scaling",
                            "No performance monitoring",
                            "Resource inefficiencies"
                        ],
                        businessPainPoints: [
                            "Performance issues",
                            "High operational costs",
                            "User experience problems",
                            "Scalability limitations",
                            "Business continuity risks"
                        ]
                    }
                ]
            },
            monitoring: {
                name: "Model Monitoring & Maintenance",
                questions: [
                    {
                        id: "ML11",
                        text: "How do you monitor model performance and accuracy in production?",
                        technicalPainPoints: [
                            "No performance monitoring",
                            "Manual accuracy checks",
                            "Limited monitoring tools",
                            "No automated alerts",
                            "Reactive problem solving"
                        ],
                        businessPainPoints: [
                            "Model degradation risks",
                            "Business impact",
                            "Customer dissatisfaction",
                            "Operational inefficiencies",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML12",
                        text: "What is your approach to data drift and model drift detection?",
                        technicalPainPoints: [
                            "No drift detection",
                            "Manual drift analysis",
                            "Limited monitoring",
                            "No automated alerts",
                            "Reactive response"
                        ],
                        businessPainPoints: [
                            "Model accuracy degradation",
                            "Business impact",
                            "Customer experience issues",
                            "Operational risks",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML13",
                        text: "How do you implement model retraining and updates?",
                        technicalPainPoints: [
                            "Manual retraining processes",
                            "No automated updates",
                            "Limited retraining triggers",
                            "Manual model replacement",
                            "No update scheduling"
                        ],
                        businessPainPoints: [
                            "Model obsolescence",
                            "Performance degradation",
                            "Operational overhead",
                            "Business agility limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML14",
                        text: "What is your strategy for model explainability and interpretability?",
                        technicalPainPoints: [
                            "No explainability tools",
                            "Limited interpretability",
                            "Manual explanation generation",
                            "No bias detection",
                            "Limited transparency"
                        ],
                        businessPainPoints: [
                            "Trust and transparency issues",
                            "Compliance challenges",
                            "Decision-making gaps",
                            "Operational risks",
                            "Customer trust issues"
                        ]
                    },
                    {
                        id: "ML15",
                        text: "How do you handle model governance and compliance?",
                        technicalPainPoints: [
                            "No model governance",
                            "Manual compliance checks",
                            "Limited audit trails",
                            "No approval processes",
                            "Manual documentation"
                        ],
                        businessPainPoints: [
                            "Compliance risks",
                            "Operational overhead",
                            "Trust and transparency issues",
                            "Decision-making delays",
                            "Regulatory violations"
                        ]
                    }
                ]
            },
            lifecycle: {
                name: "ML Lifecycle Management",
                questions: [
                    {
                        id: "ML16",
                        text: "How do you manage the end-to-end ML lifecycle from development to retirement?",
                        technicalPainPoints: [
                            "No lifecycle management",
                            "Manual processes",
                            "Limited automation",
                            "No lifecycle tracking",
                            "Manual retirement processes"
                        ],
                        businessPainPoints: [
                            "Operational inefficiencies",
                            "Quality issues",
                            "Cost overruns",
                            "Innovation barriers",
                            "Business agility limitations"
                        ]
                    },
                    {
                        id: "ML17",
                        text: "What is your approach to ML pipeline orchestration and automation?",
                        technicalPainPoints: [
                            "Manual pipeline execution",
                            "No orchestration tools",
                            "Limited automation",
                            "Manual scheduling",
                            "No dependency management"
                        ],
                        businessPainPoints: [
                            "Operational overhead",
                            "Processing delays",
                            "Business continuity risks",
                            "Cost inefficiencies",
                            "Innovation barriers"
                        ]
                    },
                    {
                        id: "ML18",
                        text: "How do you implement ML workflow management and collaboration?",
                        technicalPainPoints: [
                            "No workflow management",
                            "Limited collaboration tools",
                            "Manual coordination",
                            "No shared environments",
                            "Limited knowledge sharing"
                        ],
                        businessPainPoints: [
                            "Development inefficiencies",
                            "Knowledge silos",
                            "Innovation barriers",
                            "Operational overhead",
                            "Business agility limitations"
                        ]
                    },
                    {
                        id: "ML19",
                        text: "What is your strategy for ML resource management and optimization?",
                        technicalPainPoints: [
                            "Manual resource management",
                            "No optimization",
                            "Limited monitoring",
                            "No cost tracking",
                            "Resource inefficiencies"
                        ],
                        businessPainPoints: [
                            "High operational costs",
                            "Resource waste",
                            "Budget overruns",
                            "Scalability limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML20",
                        text: "How do you handle ML data management and feature stores?",
                        technicalPainPoints: [
                            "No feature store",
                            "Manual data management",
                            "Limited feature sharing",
                            "No feature versioning",
                            "Data silos"
                        ],
                        businessPainPoints: [
                            "Development delays",
                            "Data quality issues",
                            "Operational inefficiencies",
                            "Innovation barriers",
                            "Business agility limitations"
                        ]
                    }
                ]
            },
            operations: {
                name: "ML Operations & Infrastructure",
                questions: [
                    {
                        id: "ML21",
                        text: "How do you manage ML infrastructure and compute resources?",
                        technicalPainPoints: [
                            "Manual infrastructure management",
                            "No resource optimization",
                            "Limited scaling",
                            "No cost monitoring",
                            "Resource inefficiencies"
                        ],
                        businessPainPoints: [
                            "High operational costs",
                            "Performance issues",
                            "Scalability limitations",
                            "Budget overruns",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML22",
                        text: "What is your approach to ML security and access control?",
                        technicalPainPoints: [
                            "Basic security controls",
                            "Limited access management",
                            "No model encryption",
                            "Manual security processes",
                            "Limited audit trails"
                        ],
                        businessPainPoints: [
                            "Security vulnerabilities",
                            "Compliance risks",
                            "Data breach potential",
                            "Operational overhead",
                            "Trust and reputation issues"
                        ]
                    },
                    {
                        id: "ML23",
                        text: "How do you implement ML backup, recovery, and disaster planning?",
                        technicalPainPoints: [
                            "Manual backup processes",
                            "No automated recovery",
                            "Limited disaster planning",
                            "No backup testing",
                            "Manual failover"
                        ],
                        businessPainPoints: [
                            "Data loss risks",
                            "Business continuity issues",
                            "Extended downtime",
                            "Operational overhead",
                            "Customer impact"
                        ]
                    },
                    {
                        id: "ML24",
                        text: "What is your strategy for ML performance optimization and tuning?",
                        technicalPainPoints: [
                            "Manual optimization",
                            "No performance monitoring",
                            "Limited tuning capabilities",
                            "No automated optimization",
                            "Resource inefficiencies"
                        ],
                        businessPainPoints: [
                            "Performance issues",
                            "High operational costs",
                            "User experience problems",
                            "Scalability limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "ML25",
                        text: "How do you handle ML change management and version control?",
                        technicalPainPoints: [
                            "No version control",
                            "Manual change management",
                            "Limited rollback capabilities",
                            "No change tracking",
                            "Manual deployment processes"
                        ],
                        businessPainPoints: [
                            "Deployment risks",
                            "Quality issues",
                            "Operational overhead",
                            "Business continuity risks",
                            "Innovation barriers"
                        ]
                    }
                ]
            }
        }
    },
    genai: {
        name: "Generative AI",
        icon: "fas fa-robot",
        description: "Implementation and utilization of generative AI models and applications",
        dimensions: {
            foundation: {
                name: "AI Foundation & Infrastructure",
                questions: [
                    {
                        id: "GAI1",
                        text: "How do you establish the foundational infrastructure for generative AI workloads?",
                        technicalPainPoints: [
                            "No AI infrastructure",
                            "Limited compute resources",
                            "No GPU/TPU access",
                            "Manual resource management",
                            "Limited scaling capabilities"
                        ],
                        businessPainPoints: [
                            "Innovation barriers",
                            "High infrastructure costs",
                            "Competitive disadvantages",
                            "Technology adoption delays",
                            "Business transformation limitations"
                        ]
                    },
                    {
                        id: "GAI2",
                        text: "What is your approach to AI model management and versioning?",
                        technicalPainPoints: [
                            "No model management",
                            "Manual versioning",
                            "Limited model storage",
                            "No model comparison",
                            "Manual deployment processes"
                        ],
                        businessPainPoints: [
                            "Development inefficiencies",
                            "Quality issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Knowledge management gaps"
                        ]
                    },
                    {
                        id: "GAI3",
                        text: "How do you implement AI security and access control?",
                        technicalPainPoints: [
                            "Basic security controls",
                            "Limited access management",
                            "No model encryption",
                            "Manual security processes",
                            "Limited audit trails"
                        ],
                        businessPainPoints: [
                            "Security vulnerabilities",
                            "Compliance risks",
                            "Data breach potential",
                            "Operational overhead",
                            "Trust and reputation issues"
                        ]
                    },
                    {
                        id: "GAI4",
                        text: "What is your strategy for AI data management and privacy?",
                        technicalPainPoints: [
                            "No AI data management",
                            "Limited privacy controls",
                            "Manual data handling",
                            "No data anonymization",
                            "Limited consent management"
                        ],
                        businessPainPoints: [
                            "Privacy violations",
                            "Compliance risks",
                            "Customer trust issues",
                            "Legal and financial risks",
                            "Operational complexity"
                        ]
                    },
                    {
                        id: "GAI5",
                        text: "How do you handle AI model monitoring and observability?",
                        technicalPainPoints: [
                            "No model monitoring",
                            "Manual performance checks",
                            "Limited observability",
                            "No automated alerts",
                            "Reactive problem solving"
                        ],
                        businessPainPoints: [
                            "Model degradation risks",
                            "Business impact",
                            "Customer dissatisfaction",
                            "Operational inefficiencies",
                            "Competitive disadvantages"
                        ]
                    }
                ]
            },
            development: {
                name: "AI Development & Training",
                questions: [
                    {
                        id: "GAI6",
                        text: "How do you approach generative AI model development and fine-tuning?",
                        technicalPainPoints: [
                            "Manual model development",
                            "No fine-tuning capabilities",
                            "Limited experimentation",
                            "No model optimization",
                            "Inconsistent development processes"
                        ],
                        businessPainPoints: [
                            "Development delays",
                            "Quality issues",
                            "Innovation barriers",
                            "Operational inefficiencies",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "GAI7",
                        text: "What is your strategy for prompt engineering and optimization?",
                        technicalPainPoints: [
                            "Manual prompt creation",
                            "No prompt optimization",
                            "Limited prompt management",
                            "No prompt versioning",
                            "Inconsistent prompt quality"
                        ],
                        businessPainPoints: [
                            "AI output quality issues",
                            "User experience problems",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business value limitations"
                        ]
                    },
                    {
                        id: "GAI8",
                        text: "How do you implement AI model training and hyperparameter optimization?",
                        technicalPainPoints: [
                            "Manual training processes",
                            "No hyperparameter optimization",
                            "Limited distributed training",
                            "Manual model selection",
                            "No training monitoring"
                        ],
                        businessPainPoints: [
                            "Training delays",
                            "Model quality issues",
                            "High computational costs",
                            "Operational inefficiencies",
                            "Innovation barriers"
                        ]
                    },
                    {
                        id: "GAI9",
                        text: "What is your approach to AI model validation and testing?",
                        technicalPainPoints: [
                            "Limited validation framework",
                            "Manual testing processes",
                            "No automated validation",
                            "Limited test data management",
                            "No performance benchmarking"
                        ],
                        businessPainPoints: [
                            "Model quality risks",
                            "Deployment failures",
                            "Operational overhead",
                            "Business continuity risks",
                            "Customer impact"
                        ]
                    },
                    {
                        id: "GAI10",
                        text: "How do you handle AI experiment tracking and model comparison?",
                        technicalPainPoints: [
                            "No experiment tracking",
                            "Manual model comparison",
                            "Limited reproducibility",
                            "No experiment management",
                            "Manual documentation"
                        ],
                        businessPainPoints: [
                            "Development inefficiencies",
                            "Quality issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Knowledge management gaps"
                        ]
                    }
                ]
            },
            deployment: {
                name: "AI Deployment & Serving",
                questions: [
                    {
                        id: "GAI11",
                        text: "How do you deploy generative AI models to production?",
                        technicalPainPoints: [
                            "Manual deployment processes",
                            "No deployment automation",
                            "Limited deployment options",
                            "No rollback capabilities",
                            "Manual testing"
                        ],
                        businessPainPoints: [
                            "Deployment delays",
                            "Operational risks",
                            "Quality issues",
                            "Business continuity risks",
                            "Innovation barriers"
                        ]
                    },
                    {
                        id: "GAI12",
                        text: "What is your approach to AI model serving and inference optimization?",
                        technicalPainPoints: [
                            "Limited serving capabilities",
                            "No inference optimization",
                            "Manual scaling",
                            "No performance monitoring",
                            "Limited serving options"
                        ],
                        businessPainPoints: [
                            "Performance issues",
                            "High operational costs",
                            "User experience problems",
                            "Scalability limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "GAI13",
                        text: "How do you implement AI model APIs and integration?",
                        technicalPainPoints: [
                            "No API management",
                            "Limited integration capabilities",
                            "Manual API development",
                            "No versioning strategy",
                            "Limited documentation"
                        ],
                        businessPainPoints: [
                            "Integration challenges",
                            "Developer productivity issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility limitations"
                        ]
                    },
                    {
                        id: "GAI14",
                        text: "What is your strategy for AI model scaling and load balancing?",
                        technicalPainPoints: [
                            "Manual scaling processes",
                            "No load balancing",
                            "Limited auto-scaling",
                            "No performance monitoring",
                            "Resource inefficiencies"
                        ],
                        businessPainPoints: [
                            "Performance issues",
                            "High operational costs",
                            "User experience problems",
                            "Scalability limitations",
                            "Business continuity risks"
                        ]
                    },
                    {
                        id: "GAI15",
                        text: "How do you handle AI model rollback and version management?",
                        technicalPainPoints: [
                            "No rollback capabilities",
                            "Manual version management",
                            "Limited deployment tracking",
                            "No automated rollback",
                            "Manual incident response"
                        ],
                        businessPainPoints: [
                            "Deployment risks",
                            "Extended downtime",
                            "Business continuity risks",
                            "Operational overhead",
                            "Customer impact"
                        ]
                    }
                ]
            },
            applications: {
                name: "AI Applications & Use Cases",
                questions: [
                    {
                        id: "GAI16",
                        text: "How do you implement Retrieval-Augmented Generation (RAG) applications?",
                        technicalPainPoints: [
                            "No RAG implementation",
                            "Limited vector search",
                            "Manual knowledge base management",
                            "No context optimization",
                            "Limited retrieval capabilities"
                        ],
                        businessPainPoints: [
                            "Limited AI capabilities",
                            "User experience issues",
                            "Operational inefficiencies",
                            "Innovation barriers",
                            "Business value limitations"
                        ]
                    },
                    {
                        id: "GAI17",
                        text: "What is your approach to AI agent development and deployment?",
                        technicalPainPoints: [
                            "No agent framework",
                            "Limited agent capabilities",
                            "Manual agent development",
                            "No agent orchestration",
                            "Limited agent monitoring"
                        ],
                        businessPainPoints: [
                            "Automation limitations",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility constraints",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "GAI18",
                        text: "How do you implement conversational AI and chatbots?",
                        technicalPainPoints: [
                            "No conversational AI",
                            "Limited chatbot capabilities",
                            "Manual conversation management",
                            "No context awareness",
                            "Limited integration"
                        ],
                        businessPainPoints: [
                            "Customer experience issues",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "GAI19",
                        text: "What is your strategy for AI-powered content generation and automation?",
                        technicalPainPoints: [
                            "No content generation",
                            "Limited automation capabilities",
                            "Manual content creation",
                            "No content optimization",
                            "Limited content management"
                        ],
                        businessPainPoints: [
                            "Content creation delays",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business agility limitations",
                            "Competitive disadvantages"
                        ]
                    },
                    {
                        id: "GAI20",
                        text: "How do you handle AI model customization and domain adaptation?",
                        technicalPainPoints: [
                            "No model customization",
                            "Limited domain adaptation",
                            "Manual customization processes",
                            "No adaptation monitoring",
                            "Limited customization tools"
                        ],
                        businessPainPoints: [
                            "AI output quality issues",
                            "User experience problems",
                            "Operational overhead",
                            "Innovation barriers",
                            "Business value limitations"
                        ]
                    }
                ]
            },
            governance: {
                name: "AI Governance & Ethics",
                questions: [
                    {
                        id: "GAI21",
                        text: "How do you implement AI governance and compliance frameworks?",
                        technicalPainPoints: [
                            "No AI governance",
                            "Manual compliance checks",
                            "Limited audit trails",
                            "No approval processes",
                            "Manual documentation"
                        ],
                        businessPainPoints: [
                            "Compliance risks",
                            "Operational overhead",
                            "Trust and transparency issues",
                            "Decision-making delays",
                            "Regulatory violations"
                        ]
                    },
                    {
                        id: "GAI22",
                        text: "What is your approach to AI ethics and responsible AI practices?",
                        technicalPainPoints: [
                            "No ethics framework",
                            "Limited bias detection",
                            "Manual ethics checks",
                            "No fairness monitoring",
                            "Limited transparency"
                        ],
                        businessPainPoints: [
                            "Ethical risks",
                            "Trust and reputation issues",
                            "Compliance challenges",
                            "Operational risks",
                            "Customer trust issues"
                        ]
                    },
                    {
                        id: "GAI23",
                        text: "How do you handle AI model explainability and interpretability?",
                        technicalPainPoints: [
                            "No explainability tools",
                            "Limited interpretability",
                            "Manual explanation generation",
                            "No bias detection",
                            "Limited transparency"
                        ],
                        businessPainPoints: [
                            "Trust and transparency issues",
                            "Compliance challenges",
                            "Decision-making gaps",
                            "Operational risks",
                            "Customer trust issues"
                        ]
                    },
                    {
                        id: "GAI24",
                        text: "What is your strategy for AI risk management and mitigation?",
                        technicalPainPoints: [
                            "No risk management",
                            "Manual risk assessment",
                            "Limited risk monitoring",
                            "No mitigation strategies",
                            "Manual incident response"
                        ],
                        businessPainPoints: [
                            "Operational risks",
                            "Business continuity risks",
                            "Compliance challenges",
                            "Trust and reputation issues",
                            "Customer impact"
                        ]
                    },
                    {
                        id: "GAI25",
                        text: "How do you implement AI change management and version control?",
                        technicalPainPoints: [
                            "No version control",
                            "Manual change management",
                            "Limited rollback capabilities",
                            "No change tracking",
                            "Manual deployment processes"
                        ],
                        businessPainPoints: [
                            "Deployment risks",
                            "Quality issues",
                            "Operational overhead",
                            "Business continuity risks",
                            "Innovation barriers"
                        ]
                    }
                ]
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { extendedAssessmentData };
}

// Databricks Technical Maturity Assessment Framework Data
const assessmentData = {
    pillars: {
        platform: {
            name: "Platform",
            icon: "fas fa-server",
            description: "Infrastructure, scalability, and integration capabilities",
            dimensions: {
                governance: {
                    name: "Governance & Compliance",
                    questions: [
                        {
                            id: "P1",
                            text: "How is your data governance framework implemented across the platform?",
                            technicalPainPoints: [
                                "Lack of centralized data catalog",
                                "Inconsistent data classification",
                                "Manual governance processes",
                                "Limited audit trails",
                                "No data lineage tracking"
                            ],
                            businessPainPoints: [
                                "Compliance risks",
                                "Data quality issues",
                                "Regulatory violations",
                                "Trust and transparency gaps",
                                "Operational inefficiencies"
                            ]
                        },
                        {
                            id: "P2",
                            text: "What level of security controls and access management do you have in place?",
                            technicalPainPoints: [
                                "Basic authentication only",
                                "No role-based access control",
                                "Limited encryption at rest",
                                "No network segmentation",
                                "Insufficient monitoring"
                            ],
                            businessPainPoints: [
                                "Security vulnerabilities",
                                "Data breach risks",
                                "Compliance gaps",
                                "Operational overhead",
                                "Trust and reputation issues"
                            ]
                        },
                        {
                            id: "P3",
                            text: "How do you handle data privacy and regulatory compliance requirements?",
                            technicalPainPoints: [
                                "No data masking capabilities",
                                "Limited retention policies",
                                "No consent management",
                                "Manual compliance reporting",
                                "Inadequate data classification"
                            ],
                            businessPainPoints: [
                                "GDPR/CCPA violations",
                                "Legal and financial risks",
                                "Customer trust issues",
                                "Operational complexity",
                                "Regulatory penalties"
                            ]
                        },
                        {
                            id: "P4",
                            text: "What is your approach to data lineage and impact analysis?",
                            technicalPainPoints: [
                                "Manual lineage documentation",
                                "No automated impact analysis",
                                "Limited change tracking",
                                "No dependency mapping",
                                "Insufficient metadata management"
                            ],
                            businessPainPoints: [
                                "Change management risks",
                                "Data quality degradation",
                                "Operational disruptions",
                                "Compliance challenges",
                                "Decision-making delays"
                            ]
                        },
                        {
                            id: "P5",
                            text: "How do you ensure data quality and consistency across the platform?",
                            technicalPainPoints: [
                                "No automated data quality checks",
                                "Inconsistent data standards",
                                "Manual quality processes",
                                "Limited data profiling",
                                "No quality monitoring"
                            ],
                            businessPainPoints: [
                                "Poor decision making",
                                "Customer dissatisfaction",
                                "Operational inefficiencies",
                                "Revenue impact",
                                "Trust and credibility issues"
                            ]
                        }
                    ]
                },
                scalability: {
                    name: "Scalability & Performance",
                    questions: [
                        {
                            id: "P6",
                            text: "How does your platform handle increasing data volumes and user loads?",
                            technicalPainPoints: [
                                "Manual scaling processes",
                                "Performance bottlenecks",
                                "Resource constraints",
                                "No auto-scaling",
                                "Limited monitoring"
                            ],
                            businessPainPoints: [
                                "User experience degradation",
                                "Operational costs",
                                "Business continuity risks",
                                "Competitive disadvantage",
                                "Growth limitations"
                            ]
                        },
                        {
                            id: "P7",
                            text: "What is your approach to resource optimization and cost management?",
                            technicalPainPoints: [
                                "No resource monitoring",
                                "Over-provisioned resources",
                                "Manual cost optimization",
                                "No usage analytics",
                                "Limited automation"
                            ],
                            businessPainPoints: [
                                "High operational costs",
                                "Budget overruns",
                                "ROI challenges",
                                "Resource waste",
                                "Financial inefficiencies"
                            ]
                        },
                        {
                            id: "P8",
                            text: "How do you ensure high availability and disaster recovery?",
                            technicalPainPoints: [
                                "Single point of failure",
                                "No backup strategy",
                                "Manual failover processes",
                                "Limited redundancy",
                                "No disaster recovery plan"
                            ],
                            businessPainPoints: [
                                "Business continuity risks",
                                "Data loss potential",
                                "Customer impact",
                                "Revenue losses",
                                "Reputation damage"
                            ]
                        },
                        {
                            id: "P9",
                            text: "What monitoring and alerting capabilities do you have in place?",
                            technicalPainPoints: [
                                "Basic monitoring only",
                                "No proactive alerting",
                                "Limited metrics collection",
                                "Manual incident response",
                                "No performance baselines"
                            ],
                            businessPainPoints: [
                                "Reactive problem solving",
                                "Extended downtime",
                                "Customer dissatisfaction",
                                "Operational inefficiencies",
                                "Business impact"
                            ]
                        },
                        {
                            id: "P10",
                            text: "How do you handle multi-region and global deployments?",
                            technicalPainPoints: [
                                "Single region deployment",
                                "No global distribution",
                                "Latency issues",
                                "Data sovereignty challenges",
                                "Limited redundancy"
                            ],
                            businessPainPoints: [
                                "Global user experience issues",
                                "Compliance challenges",
                                "Business expansion limitations",
                                "Competitive disadvantages",
                                "Operational complexity"
                            ]
                        }
                    ]
                },
                integration: {
                    name: "Integration & Connectivity",
                    questions: [
                        {
                            id: "P11",
                            text: "How do you integrate with existing enterprise systems and data sources?",
                            technicalPainPoints: [
                                "Manual data transfers",
                                "Limited API connectivity",
                                "No real-time integration",
                                "Custom connectors required",
                                "Data format incompatibilities"
                            ],
                            businessPainPoints: [
                                "Data silos",
                                "Operational inefficiencies",
                                "Delayed insights",
                                "Integration costs",
                                "Business process gaps"
                            ]
                        },
                        {
                            id: "P12",
                            text: "What is your approach to API management and developer experience?",
                            technicalPainPoints: [
                                "No API gateway",
                                "Limited documentation",
                                "No versioning strategy",
                                "Basic authentication",
                                "No rate limiting"
                            ],
                            businessPainPoints: [
                                "Developer productivity issues",
                                "Integration challenges",
                                "Security risks",
                                "Scalability limitations",
                                "Innovation barriers"
                            ]
                        },
                        {
                            id: "P13",
                            text: "How do you handle real-time data streaming and event processing?",
                            technicalPainPoints: [
                                "Batch processing only",
                                "No streaming capabilities",
                                "Limited event handling",
                                "Manual data processing",
                                "No real-time analytics"
                            ],
                            businessPainPoints: [
                                "Delayed decision making",
                                "Competitive disadvantages",
                                "Customer experience issues",
                                "Operational inefficiencies",
                                "Business agility limitations"
                            ]
                        },
                        {
                            id: "P14",
                            text: "What cloud and hybrid deployment strategies do you employ?",
                            technicalPainPoints: [
                                "On-premises only",
                                "No cloud integration",
                                "Limited hybrid capabilities",
                                "Manual deployment processes",
                                "No cloud-native features"
                            ],
                            businessPainPoints: [
                                "Scalability limitations",
                                "Cost inefficiencies",
                                "Innovation barriers",
                                "Competitive disadvantages",
                                "Operational complexity"
                            ]
                        },
                        {
                            id: "P15",
                            text: "How do you manage data movement and synchronization across systems?",
                            technicalPainPoints: [
                                "Manual data movement",
                                "No synchronization strategy",
                                "Data consistency issues",
                                "Limited automation",
                                "No conflict resolution"
                            ],
                            businessPainPoints: [
                                "Data inconsistencies",
                                "Operational overhead",
                                "Decision-making delays",
                                "Customer experience issues",
                                "Business process inefficiencies"
                            ]
                        }
                    ]
                },
                automation: {
                    name: "Automation & DevOps",
                    questions: [
                        {
                            id: "P16",
                            text: "What level of infrastructure automation and orchestration do you have?",
                            technicalPainPoints: [
                                "Manual infrastructure management",
                                "No infrastructure as code",
                                "Limited automation",
                                "Manual deployment processes",
                                "No orchestration tools"
                            ],
                            businessPainPoints: [
                                "Operational inefficiencies",
                                "Human error risks",
                                "Scalability limitations",
                                "Cost overruns",
                                "Time-to-market delays"
                            ]
                        },
                        {
                            id: "P17",
                            text: "How do you implement CI/CD pipelines for data and analytics workloads?",
                            technicalPainPoints: [
                                "Manual deployment processes",
                                "No version control",
                                "Limited testing automation",
                                "No rollback capabilities",
                                "Manual quality gates"
                            ],
                            businessPainPoints: [
                                "Release delays",
                                "Quality issues",
                                "Operational risks",
                                "Innovation barriers",
                                "Competitive disadvantages"
                            ]
                        },
                        {
                            id: "P18",
                            text: "What is your approach to configuration management and environment consistency?",
                            technicalPainPoints: [
                                "Manual configuration",
                                "Environment inconsistencies",
                                "No configuration drift detection",
                                "Limited environment management",
                                "Manual synchronization"
                            ],
                            businessPainPoints: [
                                "Deployment failures",
                                "Operational overhead",
                                "Quality issues",
                                "Time-to-market delays",
                                "Cost inefficiencies"
                            ]
                        },
                        {
                            id: "P19",
                            text: "How do you handle backup, recovery, and data protection?",
                            technicalPainPoints: [
                                "Manual backup processes",
                                "No automated recovery",
                                "Limited data protection",
                                "No backup testing",
                                "Manual disaster recovery"
                            ],
                            businessPainPoints: [
                                "Data loss risks",
                                "Business continuity issues",
                                "Compliance challenges",
                                "Operational overhead",
                                "Customer impact"
                            ]
                        },
                        {
                            id: "P20",
                            text: "What monitoring and observability capabilities do you have for operations?",
                            technicalPainPoints: [
                                "Basic logging only",
                                "No distributed tracing",
                                "Limited metrics collection",
                                "Manual incident response",
                                "No performance monitoring"
                            ],
                            businessPainPoints: [
                                "Reactive problem solving",
                                "Extended downtime",
                                "Customer dissatisfaction",
                                "Operational inefficiencies",
                                "Business impact"
                            ]
                        }
                    ]
                },
                innovation: {
                    name: "Innovation & Future Readiness",
                    questions: [
                        {
                            id: "P21",
                            text: "How do you evaluate and adopt new Databricks features and capabilities?",
                            technicalPainPoints: [
                                "No feature evaluation process",
                                "Limited testing environments",
                                "Manual adoption processes",
                                "No change management",
                                "Limited training resources"
                            ],
                            businessPainPoints: [
                                "Missed opportunities",
                                "Competitive disadvantages",
                                "Innovation barriers",
                                "Operational inefficiencies",
                                "Technology debt"
                            ]
                        },
                        {
                            id: "P22",
                            text: "What is your strategy for emerging technologies and AI/ML integration?",
                            technicalPainPoints: [
                                "No AI/ML strategy",
                                "Limited experimentation",
                                "No innovation labs",
                                "Manual technology evaluation",
                                "Limited skill development"
                            ],
                            businessPainPoints: [
                                "Innovation lag",
                                "Competitive disadvantages",
                                "Market opportunities missed",
                                "Talent retention issues",
                                "Business transformation delays"
                            ]
                        },
                        {
                            id: "P23",
                            text: "How do you foster a culture of experimentation and continuous improvement?",
                            technicalPainPoints: [
                                "No experimentation framework",
                                "Limited sandbox environments",
                                "No innovation metrics",
                                "Manual improvement processes",
                                "Limited collaboration tools"
                            ],
                            businessPainPoints: [
                                "Innovation stagnation",
                                "Employee engagement issues",
                                "Competitive disadvantages",
                                "Operational inefficiencies",
                                "Business growth limitations"
                            ]
                        },
                        {
                            id: "P24",
                            text: "What partnerships and ecosystem integrations do you leverage?",
                            technicalPainPoints: [
                                "Limited partner integrations",
                                "No ecosystem strategy",
                                "Manual integration processes",
                                "Limited API utilization",
                                "No partner evaluation"
                            ],
                            businessPainPoints: [
                                "Missed opportunities",
                                "Innovation limitations",
                                "Competitive disadvantages",
                                "Cost inefficiencies",
                                "Business growth barriers"
                            ]
                        },
                        {
                            id: "P25",
                            text: "How do you plan for future scalability and technology evolution?",
                            technicalPainPoints: [
                                "No technology roadmap",
                                "Limited capacity planning",
                                "No future-proofing strategy",
                                "Manual planning processes",
                                "Limited trend analysis"
                            ],
                            businessPainPoints: [
                                "Technology obsolescence",
                                "Competitive disadvantages",
                                "Investment inefficiencies",
                                "Business growth limitations",
                                "Innovation barriers"
                            ]
                        }
                    ]
                }
            }
        },
        data: {
            name: "Data",
            icon: "fas fa-database",
            description: "Data engineering, warehousing, and analytics capabilities",
            dimensions: {
                ingestion: {
                    name: "Data Ingestion & Sources",
                    questions: [
                        {
                            id: "DE1",
                            text: "How do you handle data ingestion from various sources and formats?",
                            technicalPainPoints: [
                                "Manual data ingestion",
                                "Limited source connectivity",
                                "No real-time ingestion",
                                "Data format incompatibilities",
                                "No ingestion monitoring"
                            ],
                            businessPainPoints: [
                                "Data silos",
                                "Delayed insights",
                                "Operational overhead",
                                "Data quality issues",
                                "Business process delays"
                            ]
                        },
                        {
                            id: "DE2",
                            text: "What is your approach to handling streaming and batch data ingestion?",
                            technicalPainPoints: [
                                "Batch processing only",
                                "No streaming capabilities",
                                "Manual data processing",
                                "Limited real-time analytics",
                                "No event handling"
                            ],
                            businessPainPoints: [
                                "Delayed decision making",
                                "Competitive disadvantages",
                                "Customer experience issues",
                                "Operational inefficiencies",
                                "Business agility limitations"
                            ]
                        },
                        {
                            id: "DE3",
                            text: "How do you ensure data quality and validation during ingestion?",
                            technicalPainPoints: [
                                "No data validation",
                                "Manual quality checks",
                                "Limited error handling",
                                "No data profiling",
                                "Inconsistent quality standards"
                            ],
                            businessPainPoints: [
                                "Poor data quality",
                                "Decision-making errors",
                                "Customer dissatisfaction",
                                "Operational inefficiencies",
                                "Compliance risks"
                            ]
                        },
                        {
                            id: "DE4",
                            text: "What is your strategy for handling large-scale data ingestion?",
                            technicalPainPoints: [
                                "Performance bottlenecks",
                                "No parallel processing",
                                "Limited scalability",
                                "Manual optimization",
                                "Resource constraints"
                            ],
                            businessPainPoints: [
                                "Processing delays",
                                "Operational costs",
                                "Business continuity risks",
                                "Competitive disadvantages",
                                "Growth limitations"
                            ]
                        },
                        {
                            id: "DE5",
                            text: "How do you manage data lineage and metadata during ingestion?",
                            technicalPainPoints: [
                                "No lineage tracking",
                                "Manual metadata management",
                                "Limited documentation",
                                "No impact analysis",
                                "Inconsistent metadata"
                            ],
                            businessPainPoints: [
                                "Data governance gaps",
                                "Compliance challenges",
                                "Operational inefficiencies",
                                "Trust and transparency issues",
                                "Decision-making delays"
                            ]
                        }
                    ]
                },
                transformation: {
                    name: "Data Transformation & Processing",
                    questions: [
                        {
                            id: "DE6",
                            text: "How do you implement data transformation and ETL/ELT processes?",
                            technicalPainPoints: [
                                "Manual transformation processes",
                                "Limited ETL/ELT capabilities",
                                "No data pipeline automation",
                                "Inconsistent transformation logic",
                                "No transformation monitoring"
                            ],
                            businessPainPoints: [
                                "Operational inefficiencies",
                                "Data quality issues",
                                "Processing delays",
                                "Cost overruns",
                                "Business process gaps"
                            ]
                        },
                        {
                            id: "DE7",
                            text: "What is your approach to data cleansing and standardization?",
                            technicalPainPoints: [
                                "Manual data cleansing",
                                "No standardization rules",
                                "Limited data profiling",
                                "Inconsistent data formats",
                                "No automated cleansing"
                            ],
                            businessPainPoints: [
                                "Data quality issues",
                                "Decision-making errors",
                                "Customer dissatisfaction",
                                "Operational overhead",
                                "Compliance risks"
                            ]
                        },
                        {
                            id: "DE8",
                            text: "How do you handle complex data transformations and business logic?",
                            technicalPainPoints: [
                                "Limited transformation capabilities",
                                "Manual business logic implementation",
                                "No reusable components",
                                "Complex transformation code",
                                "No transformation testing"
                            ],
                            businessPainPoints: [
                                "Development delays",
                                "Maintenance overhead",
                                "Quality issues",
                                "Operational risks",
                                "Business agility limitations"
                            ]
                        },
                        {
                            id: "DE9",
                            text: "What is your strategy for data aggregation and summarization?",
                            technicalPainPoints: [
                                "Manual aggregation processes",
                                "Limited aggregation capabilities",
                                "No pre-computed summaries",
                                "Performance bottlenecks",
                                "No aggregation optimization"
                            ],
                            businessPainPoints: [
                                "Query performance issues",
                                "Operational costs",
                                "User experience problems",
                                "Business intelligence limitations",
                                "Decision-making delays"
                            ]
                        },
                        {
                            id: "DE10",
                            text: "How do you implement data partitioning and optimization strategies?",
                            technicalPainPoints: [
                                "No partitioning strategy",
                                "Limited optimization techniques",
                                "Manual performance tuning",
                                "No query optimization",
                                "Resource inefficiencies"
                            ],
                            businessPainPoints: [
                                "Performance issues",
                                "High operational costs",
                                "User experience problems",
                                "Scalability limitations",
                                "Competitive disadvantages"
                            ]
                        }
                    ]
                },
                orchestration: {
                    name: "Pipeline Orchestration & Scheduling",
                    questions: [
                        {
                            id: "DE11",
                            text: "How do you orchestrate and schedule data pipelines?",
                            technicalPainPoints: [
                                "Manual pipeline execution",
                                "No scheduling capabilities",
                                "Limited orchestration tools",
                                "No dependency management",
                                "Manual error handling"
                            ],
                            businessPainPoints: [
                                "Operational overhead",
                                "Processing delays",
                                "Business continuity risks",
                                "Cost inefficiencies",
                                "Data freshness issues"
                            ]
                        },
                        {
                            id: "DE12",
                            text: "What is your approach to pipeline monitoring and alerting?",
                            technicalPainPoints: [
                                "No pipeline monitoring",
                                "Manual error detection",
                                "Limited alerting capabilities",
                                "No performance metrics",
                                "Manual incident response"
                            ],
                            businessPainPoints: [
                                "Reactive problem solving",
                                "Extended downtime",
                                "Data quality issues",
                                "Customer impact",
                                "Operational inefficiencies"
                            ]
                        },
                        {
                            id: "DE13",
                            text: "How do you handle pipeline failures and error recovery?",
                            technicalPainPoints: [
                                "Manual error handling",
                                "No automatic recovery",
                                "Limited retry mechanisms",
                                "No failure analysis",
                                "Manual incident response"
                            ],
                            businessPainPoints: [
                                "Extended downtime",
                                "Data quality issues",
                                "Operational overhead",
                                "Business continuity risks",
                                "Customer impact"
                            ]
                        },
                        {
                            id: "DE14",
                            text: "What is your strategy for pipeline versioning and change management?",
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
                        },
                        {
                            id: "DE15",
                            text: "How do you manage pipeline dependencies and data flow?",
                            technicalPainPoints: [
                                "Manual dependency management",
                                "No data flow visualization",
                                "Limited impact analysis",
                                "No dependency tracking",
                                "Manual coordination"
                            ],
                            businessPainPoints: [
                                "Change management risks",
                                "Operational complexity",
                                "Data quality issues",
                                "Business process delays",
                                "Decision-making challenges"
                            ]
                        }
                    ]
                },
                quality: {
                    name: "Data Quality & Validation",
                    questions: [
                        {
                            id: "DE16",
                            text: "How do you implement data quality checks and validation rules?",
                            technicalPainPoints: [
                                "Manual quality checks",
                                "No automated validation",
                                "Limited quality rules",
                                "No quality monitoring",
                                "Inconsistent standards"
                            ],
                            businessPainPoints: [
                                "Data quality issues",
                                "Decision-making errors",
                                "Customer dissatisfaction",
                                "Compliance risks",
                                "Operational inefficiencies"
                            ]
                        },
                        {
                            id: "DE17",
                            text: "What is your approach to data profiling and discovery?",
                            technicalPainPoints: [
                                "Manual data profiling",
                                "No automated discovery",
                                "Limited metadata collection",
                                "No data cataloging",
                                "Inconsistent documentation"
                            ],
                            businessPainPoints: [
                                "Data governance gaps",
                                "Operational inefficiencies",
                                "Trust and transparency issues",
                                "Decision-making delays",
                                "Compliance challenges"
                            ]
                        },
                        {
                            id: "DE18",
                            text: "How do you handle data anomalies and outlier detection?",
                            technicalPainPoints: [
                                "Manual anomaly detection",
                                "No automated monitoring",
                                "Limited outlier detection",
                                "No anomaly analysis",
                                "Manual investigation"
                            ],
                            businessPainPoints: [
                                "Data quality issues",
                                "Operational risks",
                                "Decision-making errors",
                                "Customer impact",
                                "Business continuity risks"
                            ]
                        },
                        {
                            id: "DE19",
                            text: "What is your strategy for data completeness and accuracy?",
                            technicalPainPoints: [
                                "No completeness checks",
                                "Manual accuracy validation",
                                "Limited data verification",
                                "No accuracy monitoring",
                                "Inconsistent validation"
                            ],
                            businessPainPoints: [
                                "Data quality issues",
                                "Decision-making errors",
                                "Customer dissatisfaction",
                                "Operational inefficiencies",
                                "Compliance risks"
                            ]
                        },
                        {
                            id: "DE20",
                            text: "How do you implement data quality metrics and reporting?",
                            technicalPainPoints: [
                                "No quality metrics",
                                "Manual reporting",
                                "Limited quality dashboards",
                                "No trend analysis",
                                "Inconsistent measurement"
                            ],
                            businessPainPoints: [
                                "Data governance gaps",
                                "Operational inefficiencies",
                                "Trust and transparency issues",
                                "Decision-making delays",
                                "Compliance challenges"
                            ]
                        }
                    ]
                },
                performance: {
                    name: "Performance & Optimization",
                    questions: [
                        {
                            id: "DE21",
                            text: "How do you optimize data processing performance and resource utilization?",
                            technicalPainPoints: [
                                "No performance optimization",
                                "Manual resource management",
                                "Limited monitoring",
                                "No performance tuning",
                                "Resource inefficiencies"
                            ],
                            businessPainPoints: [
                                "High operational costs",
                                "Processing delays",
                                "User experience issues",
                                "Scalability limitations",
                                "Competitive disadvantages"
                            ]
                        },
                        {
                            id: "DE22",
                            text: "What is your approach to caching and data storage optimization?",
                            technicalPainPoints: [
                                "No caching strategy",
                                "Limited storage optimization",
                                "Manual cache management",
                                "No performance monitoring",
                                "Storage inefficiencies"
                            ],
                            businessPainPoints: [
                                "Performance issues",
                                "High storage costs",
                                "User experience problems",
                                "Operational inefficiencies",
                                "Scalability limitations"
                            ]
                        },
                        {
                            id: "DE23",
                            text: "How do you handle parallel processing and distributed computing?",
                            technicalPainPoints: [
                                "Sequential processing only",
                                "No parallel capabilities",
                                "Limited distributed computing",
                                "Manual load balancing",
                                "Resource underutilization"
                            ],
                            businessPainPoints: [
                                "Processing delays",
                                "High operational costs",
                                "Scalability limitations",
                                "Competitive disadvantages",
                                "Business agility issues"
                            ]
                        },
                        {
                            id: "DE24",
                            text: "What is your strategy for data compression and storage efficiency?",
                            technicalPainPoints: [
                                "No compression strategy",
                                "Limited storage optimization",
                                "Manual compression",
                                "No efficiency monitoring",
                                "Storage waste"
                            ],
                            businessPainPoints: [
                                "High storage costs",
                                "Performance issues",
                                "Operational inefficiencies",
                                "Scalability limitations",
                                "Budget overruns"
                            ]
                        },
                        {
                            id: "DE25",
                            text: "How do you implement performance monitoring and optimization?",
                            technicalPainPoints: [
                                "No performance monitoring",
                                "Manual optimization",
                                "Limited metrics collection",
                                "No performance baselines",
                                "Reactive optimization"
                            ],
                            businessPainPoints: [
                                "Performance degradation",
                                "Operational inefficiencies",
                                "User experience issues",
                                "Cost overruns",
                                "Competitive disadvantages"
                            ]
                        }
                    ]
                }
            }
        }
    }
};

// Add extended pillars data
Object.assign(assessmentData.pillars, extendedAssessmentData);

// Maturity levels
const maturityLevels = [
    { value: "initial", label: "Initial", description: "Ad-hoc processes, limited documentation" },
    { value: "developing", label: "Developing", description: "Some processes defined, basic tools in use" },
    { value: "defined", label: "Defined", description: "Processes documented, tools standardized" },
    { value: "managed", label: "Managed", description: "Processes measured, continuous improvement" },
    { value: "optimized", label: "Optimized", description: "Best practices, innovation-driven" }
];

// Databricks tools and recommendations
const databricksTools = {
    platform: {
        unityCatalog: {
            name: "Unity Catalog",
            description: "Centralized governance for data and AI assets",
            benefits: ["Unified governance", "Fine-grained access control", "Data lineage tracking", "Compliance automation"]
        },
        serverlessCompute: {
            name: "Serverless Compute",
            description: "Auto-scaling infrastructure for optimal resource utilization",
            benefits: ["Cost optimization", "Auto-scaling", "Simplified management", "Performance optimization"]
        },
        lakehouseArchitecture: {
            name: "Lakehouse Architecture",
            description: "Unified platform combining data lakes and data warehouses",
            benefits: ["Unified platform", "ACID transactions", "Schema evolution", "Multi-modal analytics"]
        },
        workspaceManagement: {
            name: "Workspace Management",
            description: "Centralized workspace administration and user management",
            benefits: ["Centralized administration", "User provisioning", "Resource management", "Security controls"]
        },
        networking: {
            name: "Networking & Security",
            description: "Advanced networking and security features",
            benefits: ["VPC integration", "Private connectivity", "Network isolation", "Security compliance"]
        }
    },
    data: {
        deltaLake: {
            name: "Delta Lake",
            description: "Open-source storage layer with ACID transactions",
            benefits: ["ACID transactions", "Schema evolution", "Time travel", "Upserts and deletes"]
        },
        deltaLiveTables: {
            name: "Delta Live Tables",
            description: "Declarative ETL framework for reliable data pipelines",
            benefits: ["Declarative ETL", "Automatic optimization", "Data quality monitoring", "Simplified maintenance"]
        },
        lakeflowDesigner: {
            name: "Lakeflow Designer",
            description: "Low-code/no-code environment for building ETL pipelines",
            benefits: ["Visual pipeline design", "No-code development", "Rapid prototyping", "Business user enablement"]
        },
        databricksSql: {
            name: "Databricks SQL",
            description: "High-performance SQL analytics on data lakes",
            benefits: ["High performance", "Standard SQL", "BI integration", "Real-time analytics"]
        },
        photonEngine: {
            name: "Photon Engine",
            description: "Optimized query execution engine",
            benefits: ["Query acceleration", "Cost optimization", "Performance improvement", "Compatibility"]
        },
        sqlWarehouse: {
            name: "SQL Warehouse",
            description: "Managed SQL compute for analytics workloads",
            benefits: ["Managed compute", "Auto-scaling", "Cost optimization", "High availability"]
        },
        apacheSpark: {
            name: "Apache Spark",
            description: "Unified analytics engine for large-scale data processing",
            benefits: ["High performance", "Scalability", "Multiple languages", "Rich ecosystem"]
        },
        biIntegration: {
            name: "BI Integration",
            description: "Seamless integration with business intelligence tools",
            benefits: ["Tool compatibility", "Real-time connectivity", "Performance optimization", "User experience"]
        }
    },
    ml: {
        mlflow: {
            name: "MLflow",
            description: "End-to-end ML lifecycle management",
            benefits: ["Experiment tracking", "Model management", "Deployment", "Reproducibility"]
        },
        autoML: {
            name: "AutoML",
            description: "Automated model development and hyperparameter tuning",
            benefits: ["Automated development", "Hyperparameter optimization", "Model selection", "Time savings"]
        },
        featureStore: {
            name: "Feature Store",
            description: "Centralized feature management and serving",
            benefits: ["Feature sharing", "Version control", "Online serving", "Data quality"]
        },
        modelServing: {
            name: "Model Serving",
            description: "Production-ready model serving infrastructure",
            benefits: ["High performance", "Auto-scaling", "A/B testing", "Monitoring"]
        },
        modelRegistry: {
            name: "Model Registry",
            description: "Centralized model versioning and governance",
            benefits: ["Version control", "Governance", "Collaboration", "Compliance"]
        }
    },
    genai: {
        mosaicAI: {
            name: "Mosaic AI",
            description: "Production-ready AI agent framework",
            benefits: ["Agent development", "RAG capabilities", "Enterprise governance", "Scalability"]
        },
        vectorSearch: {
            name: "Vector Search",
            description: "Vector search and RAG capabilities",
            benefits: ["Semantic search", "RAG applications", "Performance", "Scalability"]
        },
        agentFramework: {
            name: "Agent Framework",
            description: "Enterprise AI governance and deployment",
            benefits: ["Governance", "Security", "Compliance", "Monitoring"]
        },
        foundationModels: {
            name: "Foundation Models",
            description: "Access to state-of-the-art foundation models",
            benefits: ["Latest models", "Fine-tuning", "Customization", "Performance"]
        },
        aiGateway: {
            name: "AI Gateway",
            description: "Centralized AI model access and governance",
            benefits: ["Unified access", "Governance", "Cost optimization", "Security"]
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { assessmentData, maturityLevels, databricksTools };
}

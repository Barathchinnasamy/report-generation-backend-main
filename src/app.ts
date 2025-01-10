import express, { Request, Response } from "express";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import cors from "cors";
import pdfService from "./pdf.service";

// const fetchImageFromUrl = async (url: string): Promise<Buffer> => {
//   const response = await fetch(url);
//   const buffer = await response.buffer();
//   return buffer;
// };

const app = express();
const PORT = 5000;

app.use(cors());

// Route to generate and send PDF
app.get("/enterprise-readiness-report", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Enterprise Readiness Insights Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);


  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Trustworthy AI Controls','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Maturity Assessment','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Maturity Levels','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Assessment Findings','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Assessment Results','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Gap Analysis','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    // {
    //   row: ['8. Key for Takeaways','6'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // },
    // {
    //   row: ['9. Users and Territories', '9'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  
  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Objective", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The objective of this assessment is to evaluate The organization's AI maturity, focusing on the seamless integration of AI solutions into every aspect of business operations. This evaluation aims to validate the company's commitment to leveraging AI for enhanced performance and innovation. ",
    "left",
    6
  );
  pdfService.drawSubHeader("Methodology: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A comprehensive mixed-method approach was utilized, comprising:",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Stakeholder Interviews: In-depth discussions with department leaders and AI practitioners to understand the AI strategy and its business alignment. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Data & Infrastructure Audit: Analysis of existing data pipelines and cloud infrastructure supporting AI initiatives. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Model Audits: Review of key AI models, focusing on security, compliance, and explainability. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Surveys: Employee feedback was collected to gauge the impact of AI on daily operations and overall productivity. ",
    "left",
    16
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("2. TrustWorthy AI Controls", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A Trustworthy AI Framework is essential for guiding the ethical development, deployment, and governance of artificial intelligence systems. As AI becomes more integrated into various facets of society, ensuring its alignment with human values—such as fairness, transparency, accountability, and inclusiveness—is crucial. This framework outlines core principles and practical steps to create AI systems that respect user privacy, prioritize security, and foster fairness while minimizing risks. With a commitment to transparent and responsible practices, the Trustworthy AI Framework builds user trust, supports compliance with regulations, and promotes AI innovations that are both ethical and sustainable. By adopting this approach, organizations can develop AI technologies that not only enhance business and operational capabilities but also earn public confidence and contribute positively to society.",
    "left"
  );

  pdfService.setCurrentY(10);
  pdfService.drawHeading("3. AI Maturity Assessment", "left");
  pdfService.drawWrappedText(
    "An AI Maturity Assessment is a structured evaluation of an organization's AI capabilities across key dimensions, including strategy, governance, data management, model development, deployment, and integration. This assessment enables organizations to understand their current AI maturity level and identify areas for improvement. By examining how well AI initiatives align with business goals and assessing data quality and governance frameworks, organizations can create strategic plans that enhance their AI practices. Ultimately, an AI Maturity Assessment provides valuable insights that help organizations prioritize AI initiatives, optimize resource allocation, and drive successful AI adoption in alignment with their long-term objectives.",
    "left"
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("4. Maturity Levels", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This section assesses a company's progress across FUSEFY's six maturity levels:",
    "left"
  );
  pdfService.setCurrentY(1);

  const tableData1 = [
    {
      row: [
        "Level 0: AI Awareness",
        "At the AI Awareness stage, organizations are recognizing the potential of AI but have not initiated any AI projects or strategies. There may be limited understanding of AI technologies, benefits, and implications within the organization. No formal AI governance structures, policies, or data strategies specific to AI are in place.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor : [rgb(0, 0, 0.5), rgb(1,1,1)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
    
    
    
    
    
  ];
  pdfService.setCurrentY(35);
  pdfService.drawHeading(" ", "left");
  pdfService.renderTable(tableData1, [140,340]);
  pdfService.setCurrentY(85);

  pdfService.setCurrentY(15);

  pdfService.setCurrentY(10);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Assessment Findings", "left");

  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The organization has established a fully autonomous AI system capable of self-optimization, dynamic decision-making, and proactive adaptations to market changes. The AI infrastructure supports continuous learning and improvement, ensuring that the company maintains a competitive edge. However, ongoing governance and ethical considerations remain crucial to sustain trust and accountability.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("i. Architecture Diagram", "left", 6);
  pdfService.setCurrentY(10);

  // await pdfService.addURLImage(
  //   "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  // );
  await pdfService.addLocalImage('./assets/updated-arch.png');

  pdfService.setCurrentY(10);

  // pdfService.setCurrentY(200);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Data Sets: The processed data is organized into Data Sets (Section 3), which includes training data and RAG (Retrieval-Augmented Generation) data, such as vector and graph databases. This helps support various AI models that rely on well-prepared and structured data.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Inventory: The AI Inventory (Section 4) acts as a repository that catalogs data, registers models, and stores features, enabling efficient access to various AI assets. It includes access control, versioning, deployment management, and integrity checks.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Training and Development: In the Training and Development phase (Section 5), different AI models are developed, including supervised, unsupervised, and reinforcement learning models, as well as GenAI (Generative AI) and LLM (Large Language Models) models. This section supports a wide range of AI techniques, from traditional models to advanced deep learning methods.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Serving and Inference: The Serving and Inference stage (Section 6) covers model deployment, governance, and monitoring. Here, models are served through gateways and monitored for performance, bias, and human feedback, ensuring that they meet quality and ethical standards.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Multi-Agent Systems: Multi-Agent Systems (Section 7) enable advanced functionalities such as output grounding, agent routing, and prompt engineering. These systems support orchestration, complex task automation, and enhanced interaction flows in AI applications.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Use Cases: The architecture culminates in AI Use Cases (Section 8), which categorize applications into user productivity, developer productivity, and business use cases. These include chatbots, AI copilot tools, API integrations, AI testing, adaptive UX, and more, showcasing how AI can drive productivity and business efficiency.",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("ii. Executive Summary", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Overview", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Level 0 - The organization has a basic recognition of AI's potential but has yet to embark on any AI-specific projects, strategies, or initiatives. The organization may have started exploring the concept of AI but lacks in-depth understanding, structured plans, or dedicated resources.",
    "left",
    10
  );

  // pdfService.setCurrentY(20);

  pdfService.setCurrentY(6);

  pdfService.drawSubHeader("Scope of Assessment:", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The assessment covers several critical areas of AI adoption, including: ",
    "left",
    10
  );

  const aiAdoptionCriticalAreas = [
    {
      row: [
        "AI Implementation",
        "Evaluation of current AI use cases, their alignment with business objectives, and overall impact on operational efficiency.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
  ];
  pdfService.setCurrentY(90);

  pdfService.drawHeading("","left");
  pdfService.setCurrentY(6);
  pdfService.renderTable(aiAdoptionCriticalAreas, [140,340]);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Assesment Results", "left");

  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Current Maturity Level:", "left", 6);
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "The organization is currently positioned at Maturity Level 0. AI initiatives are sporadic and lack a clear strategy or integration across business functions. AI activities, if any, are primarily experimental, with no established framework to guide AI development or deployment.",
    "left",
    6
  );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Data Infrastructure", "left", 6);
  pdfService.drawWrappedText(
    "The organization has minimal or no data infrastructure in place to support AI. Data is often siloed, lacking integration or consistency, which limits accessibility and reliability for potential AI applications.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Security & Compliance:", "left", 6);
  pdfService.drawWrappedText(
    "There are limited security measures or compliance protocols specific to AI. Data privacy concerns may be insufficiently addressed, creating potential risks in the absence of standardized security practices for AI deployments.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Trustworthy AI:", "left", 6);
  pdfService.drawWrappedText(
    "There is minimal awareness or consideration of transparency, fairness, or accountability in AI practices. Ethical guidelines are either lacking or are only beginning to be explored, and there are no measures to detect or mitigate biases in AI outputs.",
    "left",
    6
  );

  pdfService.setCurrentY(15);
  pdfService.drawSubHeader("TCO Graph", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The Total Cost of Ownership (TCO) Graph provides a breakdown of the expenses associated with maintaining the current architecture for Level 0. This chart illustrates costs across infrastructure, software licenses, maintenance, and operational resources. Understanding the TCO at Level 0 highlights the financial commitment required to sustain the current AI setup and serves as a baseline for evaluating potential cost efficiencies as maturity levels advance. This information helps decision-makers assess whether future investments in AI capability enhancements align with budgetary goals and ROI expectations.","left",8);

  pdfService.setCurrentY(6);
  await pdfService.addLocalImage("./assets/graph1.png");
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/graph2.png");
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/graph3.png");
  pdfService.setCurrentY(3);

  pdfService.setCurrentY(180);
  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(3);
  // page.drawImage(tcoGraph2Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )150, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(1)0;
  // pdfService.addLocalImage("./assets/graph3.png");

  // page.drawImage(tcoGraph3Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )310, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  pdfService.setCurrentY(350);
  pdfService.drawHeading("7. Gap Analysis", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Key Gaps Identified: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "At Maturity Level 0, the organization lacks foundational AI strategies and infrastructure. There is a need for structured planning, skill development, and data readiness to support any meaningful AI initiatives. Additionally, there is minimal alignment between AI experimentation and broader business goals.",
    "left",
    6
  );
  pdfService.setCurrentY(5);
  pdfService.drawSubHeader("Actions Required:", "left", 6);
  pdfService.drawWrappedText(
    "• Current Status: The current assessment reveals that while the organization has foundational components in place, there are significant gaps in advanced AI capabilities required for achieving higher maturity levels. These areas of improvement primarily center around strategic prioritization of use cases that align closely with business goals.",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Action Required: The recommended next step is a targeted use case prioritization process. This involves identifying high-impact use cases that not only support immediate business objectives but also pave the way for scalable AI adoption across the organization. This prioritization will guide resource allocation, tool selection, and the strategic roadmap for AI deployment, ensuring that the organization focuses on initiatives that maximize both value and feasibility.",
    "left",
    16
  );
  // pdfService.drawWrappedText(
  //   "• Basic Security and Compliance Measures: Introduce initial security protocols and compliance measures to protect data privacy and adhere to relevant regulatory standards, setting a foundation for ethical AI development.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Awareness and Skill Building: Conduct training and workshops to raise awareness of AI potential and develop core skills among stakeholders, promoting understanding of AI benefits and limitations.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Stakeholder Alignment: Engage with key stakeholders to define AI's role within the organization, ensuring initial AI efforts are relevant and support organizational objectives.",
  //   "left",
  //   16
  // );

  pdfService.setCurrentY(20);

  const pdfBytes = await pdfService.generatePDF();

  // Set headers to prompt download
  res.setHeader("Content-Disposition", "attachment; filename=enterprise_readiness_report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  res.send(Buffer.from(pdfBytes));
});

app.get("/usecase-prioritization-report", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. High Level Architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Low Level Architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
    "left"
  );
  pdfService.setCurrentY(10);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(6);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  const tableData = [
    {
      row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
      bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    // {
    //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
    //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
    //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    // }
  ];

  pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(10);
  pdfService.drawSubHeader("ROI Graph By year:",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/graph-1.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap.png");
  pdfService.setCurrentY(15);
  
  pdfService.setCurrentY(190);

  pdfService.drawHeading("6. High Level Architecture", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(175);


  pdfService.drawHeading("7. Low Level Architecture",'left');
  pdfService.setCurrentY(3);
  
  pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  pdfService.setCurrYTop(260);
  pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("3. Maturity level 2","left",15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  pdfService.setCurrYTop(320);
  pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, the targeted user groups include approximately 120-150 professionals involved in planning and decision-making processes. The identified users are:",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Sales Operations Teams: ~50 users leveraging the tool to predict sales trends, identify seasonal demand variations, and align inventory planning with forecasted demand.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Inventory Managers: ~40 users utilizing forecasts to maintain optimal stock levels, minimizing both overstock and stockout scenarios.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Supply Chain Managers: ~30 users responsible for monitoring the overall supply chain performance and identifying bottlenecks, which can be addressed by optimizing inventory levels or improving supply chain processes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~30 users using forecast data to plan campaigns, align promotions, and optimize resource allocation for demand spikes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from actionable insights and automated forecasting models, reducing manual intervention while maintaining accuracy through human-in-the-loop (HITL) processes.",
    "left",15
  );
  pdfService.setCurrentY(10);


  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, deployment will initially focus on regions with the highest operational impact and potential benefits.",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States and Canada, focusing on key operational hubs and warehouses.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In later phases, the tool may expand to European and Asian markets, particularly regions with complex demand cycles and high variability.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: Forecasting models and data analysis tools will adhere to regional regulations, including GDPR (for Europe) and CCPA (for the U.S.).",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: Incorporates regional demand trends, seasonality factors, and market-specific variables to ensure precise and actionable forecasts.",
    "left",25
  );
  pdfService.setCurrentY(10);



  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Demand Forecasting Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Data Accuracy Risk: Errors in historical sales or inventory data could lead to inaccurate demand forecasts, impacting supply chain decisions.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive trust in AI-generated forecasts without human oversight could result in strategic missteps, especially during unexpected market disruptions or external factors.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Compliance and Privacy Risk: Sensitive customer or sales data used in forecasting models must comply with data privacy laws, such as GDPR (EU) or CCPA (U.S.). Non-compliance may result in legal and reputational damage.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Scalability Challenges: Expanding the tool to global operations could expose performance limitations or regional biases in the forecasting model.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Bias in Forecasting Models: Historical biases in data could skew predictions, leading to inaccurate forecasts for specific regions, product categories, or demographic groups.",
    "left",
    25
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Implement robust data validation and cleaning processes to ensure the accuracy of input data.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Enforce a Human-in-the-Loop (HITL) process to review AI-generated forecasts before operational decisions are made.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Adhere to industry best practices and legal requirements for data privacy and security.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct regular audits of the forecasting model to identify and correct biases.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Design the system with scalability and adaptability in mind to support future expansions.",
    "left",
    25
  );




  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the anticipated financial benefits and strategic implications of investing in an AI-powered automation system for customer service. The project promises significant long-term ROI, aligning with organizational goals to enhance efficiency and customer satisfaction.",
    "left"
  );

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/model-card-assessment", async (req, res) => {
      await pdfService.init();
      pdfService.margin = 50;
      pdfService.innerPadding = 10; 
      pdfService.columnWidth = (pdfService.width - 2 * pdfService.margin - 2 * pdfService.innerPadding) / 2;
      pdfService.currentY = pdfService.height - pdfService.margin;
      pdfService.setCurrentY(40);

      pdfService.drawTopHeader('Fusefy AIaaS Model Card Template for "AI-Driven', 'left');
      pdfService.drawTopHeader('Drug Efficacy Prediction Model"', 'left');

      // pdfService.setCurrentY(30);
      pdfService.setCurrentY(30);
      pdfService.drawSubHeader('Model', 'left');
      pdfService.drawWrappedText('Model Name: GenAI Model Card', 'left');
      pdfService.drawWrappedText('Model Risk Tier: Tier-1' , 'left');
      pdfService.drawWrappedText('Industry Type - SupplyChain','left');
      pdfService.drawWrappedText('AI Solution Type - GenerativeAI','left');
      pdfService.drawWrappedText('Date: October 2023', 'left');
      pdfService.drawWrappedText('Principal Author: Dr. Jane Smith', 'left');
      pdfService.setCurrentY(10);

      pdfService.drawSubHeader('Intended Use', 'left');
      pdfService.drawWrappedText('• Designed to evaluate an organization\'s current AI capabilities, the strategic alignment of AI use cases, and the financial metrics such as Total Cost of Ownership (TCO) and Return on Investment (ROI). ','left');
      pdfService.drawWrappedText('• The model aims to help organizations identify where they stand in their AI adoption journey and provide actionable insights for improving AI maturity and business value.','left');
      pdfService.drawWrappedText('• This model is designed to evaluate the strategic maturity and business impact of AI at an organizational level. It does not assess the performance of individual AI models or algorithms.','left');
      pdfService.setCurrentY(10);


      pdfService.drawSubHeader('Factors','left');
      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('1. Feasibility ', 'left');
      // pdfService.setCurrentY(6);
      pdfService.drawWrappedText('Assess the readiness of the organization\'s infrastructure (e.g., cloud platforms, AI tools) and resources (e.g., data availability, skilled personnel) to implement AI solutions at scale.','left');
      pdfService.setCurrentY(10);



      // pdfService.setCurrentY(44)0;
      pdfService.setCurrYTop(440);
      // pdfService.setCurrentY(6;)
      pdfService.drawSubHeader('i. Use case ', 'right',6);

      pdfService.drawWrappedText('• Assess AI use cases by identifying if they are exploratory, operational, or advanced. For exploratory cases, focus on experimentation. To unlock their full potential, ensure sufficient infrastructure, skilled AI talent, and strong governance', 'right',6);
      
      // pdfService.setCurrentY(6;)
      pdfService.setCurrYTop(6);
      pdfService.drawSubHeader('2. Security: ', 'right',6);
      pdfService.setCurrentY(6);
      // pdfService.setCurrentY(6;)
      pdfService.drawWrappedText('• Evaluate the organization\'s approach to safeguarding data used in AI models, including encryption, access controls, and data handling practices.', 'right',6);
      pdfService.drawWrappedText('• Review the organization’s adherence to regulatory standards, such as GDPR or industry-specific guidelines, to ensure that AI implementations are secure and compliant with data protection laws.','right',6);


      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('3. Explainability: ','right',6);
      pdfService.setCurrentY(6);

      pdfService.drawWrappedText('• Determine if there are mechanisms in place to ensure accountability for AI decisions, including logging model predictions and tracing decision pathways to avoid bias or errors.','right',6);
      pdfService.drawWrappedText('• Review the ethical implications of AI models, ensuring that they are designed to prevent unintended biases and that they promote fairness, especially in sensitive use cases.','right',6);
      // pdfService.setCurrentY(3;)
      pdfService.setCurrentY(3);

      let leftColumnHeight = 0;
      let rightColumnHeight = 0;

      

      const contentHeight = Math.max(leftColumnHeight, rightColumnHeight);
      const yStart = pdfService.height - pdfService.margin - contentHeight - pdfService.innerPadding;

      pdfService.drawContentBorder(pdfService.margin, yStart - 590, 510);
      pdfService.drawContentBorder(pdfService.margin + pdfService.columnWidth + 2 * pdfService.innerPadding, yStart - 590, 510);

      
      
      pdfService.columnWidth = pdfService.width - 2 * pdfService.margin - 2 * pdfService.innerPadding;
      

      // pdfService.setCurrentY(4)10;
      pdfService.setCurrentY(410);
      pdfService.drawTopHeader('Training Data', 'left', 0, 23);
      // pdfService.setCurrentY(15);
      pdfService.setCurrentY(15);
      

      pdfService.drawHeading('1. Feasibility', 'left');
      // pdfService.setCurrentY(6;)
      pdfService.setCurrentY(6);
      
      pdfService.drawWrappedText('Fusefy ensures AI adoption feasibility through assessments and strategic planning.', 'left');
      // pdfService.setCurrentY(6;)
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('AI Maturity Assessment', 'left',15);
      pdfService.drawWrappedText('• Question: What is the current AI maturity level of the organization? (e.g., Initial Awareness, Experimental Use Cases, Business Integration)', 'left', 25);
      pdfService.drawWrappedText('• Answer: Business Integration. The organization has successfully integrated AI into several business processes and is expanding its capabilities in drug efficacy prediction.', 'left',25);
      pdfService.drawWrappedText('• Explanation: The model\'s applications align with the organization\'s maturity by enhancing existing drug testing with AI, seamlessly integrating into current workflows.', 'left',25);
      
      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY - 465, 665, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY - 465, 665, true);

      // pdfService.setCurrentY(10);
      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('AI Usecase Assessment', 'left', 15);
      pdfService.drawWrappedText('• Question: What are the primary intended uses of the model, and which business challenges are being addressed?','left', 25);
      pdfService.drawWrappedText('• Answer: The model predicts the efficacy of potential drug compounds for specific diseases, addressing challenges in reducing time and cost in drug development and clinical trials.','left',25);


      pdfService.currentY -= 10;
      pdfService.drawSubHeader('TCO Analysis','left',15);
      pdfService.drawWrappedText('• Question: What are the financial implications of AI adoption, and has a detailed TCO analysis been performed?','left',25);
      pdfService.drawWrappedText('• Answer: Yes, a detailed TCO analysis was conducted. While initial investments are substantial due to data acquisition and model training, projected long-term savings from decreased clinical trial failures and expedited market entry justify the costs.','left',25);
      


      // pdfService.setCurrentY(10);
      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('Roadmap Development','left',15);
      pdfService.drawWrappedText('• Question: What strategic roadmap has been developed for AI implementation?', 'left',25);
      pdfService.drawWrappedText('• Answer: A comprehensive two-year roadmap includes:' , 'left',25);
      pdfService.drawWrappedText('• Q1-Q2 2024: Data collection and preprocessing', 'left',45);
      pdfService.drawWrappedText('• Q3-Q4 2024: Model development and validation', 'left',45);
      pdfService.drawWrappedText('• Q1-Q2 2025: Pilot testing', 'left',45);
      pdfService.drawWrappedText('• Q3 2025 onwards: Full integration into the drug development pipeline', 'left',45);

      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('Compliance assesment','left',15);
      pdfService.drawWrappedText('• Question: Does the model comply with industry standards and regulations (e.g., SR11-7, Basel III, GDPR)?','left',25);
      pdfService.drawWrappedText('• Answer: Yes, the model complies with GDPR for data privacy and adheres to FDA guidelines relevant to medical software and devices.','left',25);

      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('AI Feature Enablement:', 'left',15);
      pdfService.drawWrappedText('• Question: Which AI features are enabled or planned to provide business value?','left',25);
      pdfService.drawWrappedText('• Answer: Enabled features include:', 'left',25);
      pdfService.drawWrappedText('• Predictive analytics for drug efficacy','left',45);
      pdfService.drawWrappedText('• Anomaly detection in clinical data', 'left',45);
      pdfService.drawWrappedText('• Pattern recognition in molecular structures', 'left',45);

      pdfService.setCurrentY(10);
      pdfService.drawSubHeader('Model Assumptions and Limitations', 'left',15);
      pdfService.drawWrappedText('• Answer', 'left',25);
      pdfService.drawWrappedText('• Assumptions: Historical clinical data accurately predicts future outcomes; molecular similarity implies efficacy similarity.', 'left',45);
      pdfService.drawWrappedText('• Limitations: Potential biases in historical data; limited predictive power for novel compounds dissimilar to training data.', 'left',45);
      pdfService.drawWrappedText('• Uncertainties: Efficacy predictions for unprecedented drug mechanisms.', 'left',45);

      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY, 145, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY, 145, true);



      pdfService.setCurrentY(10);
      pdfService.setCurrentY(10);

      pdfService.setCurrentY(6);
      pdfService.drawHeading('2. Usability','left');
      pdfService.drawWrappedText('Ensuring the model is user-friendly and delivers practical results for specific business needs.', 'left');

      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Industry-Specific Assessments:','left',15);
      pdfService.drawWrappedText('• Question: How well does the model align with industry-specific challenges? Is the model tailored for specific industries?', 'left', 25);
      pdfService.drawWrappedText('• Answer: The model is tailored for the pharmaceutical industry, directly addressing challenges in drug discovery by streamlining efficacy predictions.', 'left', 25);

      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Usability Analysis:','left',15);
      pdfService.drawWrappedText('• Question: How user-friendly is the model? Can the model outputs be easily interpreted by business users?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Yes, the model features an intuitive dashboard with visualizations, making outputs easily interpretable by researchers and non-technical stakeholders.', 'left', 25);

      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY - 335, 560, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY - 335, 560, true);

      
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('ROI Forecasting:','left',15);
      pdfService.drawWrappedText('• Question: What is the expected Return on Investment (ROI) from the model, and how has it been calculated?', 'left', 25);
      pdfService.drawWrappedText('• Answer: An expected ROI of 150% over three years, calculated based on cost savings from reduced failed trials and faster development cycles.', 'left', 25);

      // AI Product/Application Roadmap
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('AI Product/Application Roadmap:','left', 15);
      pdfService.drawWrappedText('• Question: What is the roadmap for future AI applications or product features? How will this be implemented?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Future developments include:', 'left', 25);
      pdfService.drawWrappedText('• Integration of genomic data for personalized medicine', 'left', 45);
      pdfService.drawWrappedText('• Expansion to predict adverse side effects', 'left', 45);
      pdfService.drawWrappedText('• Implementation through iterative updates post-initial deployment', 'left', 45);

      // Evaluation Data and Preprocessing
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Evaluation Data and Preprocessing:','left', 15);
      pdfService.drawWrappedText('• Question: Focus on the quality and usability of the training and evaluation datasets.', 'left', 25);
      pdfService.drawWrappedText('• Answer: High-quality datasets from clinical trials and molecular databases were used. Preprocessing steps ensured data consistency and reliability.', 'left', 25);

      // Sensitivity Analysis and Benchmarking
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Sensitivity Analysis and Benchmarking:','left', 15);
      pdfService.drawWrappedText('• Question: Evaluate the model\'s performance across various scenarios and how it responds to changes in input data.', 'left', 25);
      pdfService.drawWrappedText('• Answer: The model maintains robust performance across multiple disease areas, with a sensitivity analysis confirming stability under data variations.', 'left', 25);

      // Monitoring and Feedback Loops
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Monitoring and Feedback Loops:','left', 15);
      pdfService.drawWrappedText('• Question: Ensure continuous monitoring of usability and feedback integration.', 'left', 25);
      pdfService.drawWrappedText('• Answer: Continuous monitoring systems are in place, with regular updates incorporating user feedback and performance metrics.', 'left', 25);

      // Security section
      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY , 80, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY , 80, true);

      
      pdfService.setCurrentY(20);
      pdfService.drawHeading('3. Security','left');
      pdfService.setCurrentY(6);
      pdfService.drawWrappedText('Ensuring that robust security protocols are in place, aligned with governance standards.', 'left');
      pdfService.setCurrentY(6);

      // AI Governance Structure
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('AI Governance Structure:','left', 15);
      pdfService.drawWrappedText('• Question: How are AI policies and governance structures set up for model oversight?', 'left', 25);
      pdfService.drawWrappedText('• Answer: An AI governance committee establishes policies, oversees compliance, and ensures ethical standards are upheld.', 'left', 25);

      // Safety Protocols
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Safety Protocols:','left', 15);
      pdfService.setCurrentY(6);
      pdfService.drawWrappedText('• Question: What safety protocols are embedded in the AI roadmap to ensure safe operation under different conditions?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Safety measures include:', 'left', 25);
      pdfService.drawWrappedText('• Regular security audits', 'left', 45);
      pdfService.drawWrappedText('• Anomaly detection mechanisms', 'left', 45);
      pdfService.drawWrappedText('• Fail-safe procedures for unexpected model behavior', 'left', 45);

      // Regulatory Checklists
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Regulatory Checklists:','left',15);
      pdfService.drawWrappedText('• Question: Are there checklists or compliance protocols to ensure the model aligns with relevant regulations?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Yes, comprehensive checklists aligned with FDA, GDPR, and HIPAA guidelines are employed throughout the model lifecycle.', 'left', 25);

      // Legal and Privacy Compliance
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Legal and Privacy Compliance:','left',15);
      pdfService.drawWrappedText('• Question: How is data privacy ensured? What legal frameworks are being followed (e.g., GDPR, CCPA)?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Data privacy is ensured via encryption, access controls, and compliance with GDPR and HIPAA regulations.', 'left', 25);

      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY - 210, 620, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY - 210, 620, true);


      // Security Measures
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Security Measures:','left',15);
      pdfService.drawWrappedText('•Question: Assess the security of data inputs, outputs, and the overall model architecture.', 'left',25);
      pdfService.drawWrappedText('•Answer: Security protocols include:', 'left', 25);
      pdfService.drawWrappedText('•Encrypted data storage and transmission', 'left', 45);
      pdfService.drawWrappedText('•Secure authentication mechanisms', 'left', 45);
      pdfService.drawWrappedText('• Regular vulnerability assessments', 'left', 45);

      // Data Privacy
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Data Privacy:','left',15);
      pdfService.drawWrappedText('• Question: Evaluate how personal or sensitive data is managed.', 'left', 25);
      pdfService.drawWrappedText('• Answer: Personal data is anonymized and handled per strict privacy policies, with access limited to authorized personnel.', 'left', 25);

      // System Implementation and Controls
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('System Implementation and Controls:','left', 15);
      pdfService.drawWrappedText('• Question: Ensure the model is embedded into secure systems with robust access control.', 'left', 25);
      pdfService.drawWrappedText('• Answer: The model is integrated within secure cloud infrastructure, featuring multi-factor authentication and role-based permissions.', 'left', 25);

      // Explainability section
      //////
      // Explainability section
      //////
      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY, 65, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY, 65, true);

      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY - 240, 240, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY - 240, 240, true);

      pdfService.drawContentBorder(pdfService.margin, pdfService.currentY - 560, 320, true);
      pdfService.drawContentBorder(pdfService.margin + pdfService.width + 2 * pdfService.innerPadding, pdfService.currentY - 560, 320, true);


      pdfService.setCurrentY(30);
      pdfService.drawHeading('4. Explainability','left');
      pdfService.setCurrentY(6);
      pdfService.drawWrappedText('Providing transparency, accountability, and ethical considerations in AI models.', 'left');
      pdfService.setCurrentY(6);

      // Bias Detection
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Bias Detection:','left',15);
      pdfService.drawWrappedText('• Question: What steps have been taken to identify and mitigate biases in the model?', 'left',25);
      pdfService.drawWrappedText('• Answer: Bias assessments were conducted, with corrective actions like data rebalancing and algorithm adjustments to mitigate identified biases.', 'left',25);

      // Explainability Metrics
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Explainability Metrics:','left',15);
      pdfService.drawWrappedText('• Question: How is the model\'s decision-making process made transparent and understandable to stakeholders?', 'left',25);
      pdfService.drawWrappedText('• Answer: Implemented explainable AI techniques include:', 'left',25);
      pdfService.drawWrappedText('• Feature importance metrics', 'left',45);
      pdfService.drawWrappedText('• Decision path visualizations', 'left',45);
      pdfService.drawWrappedText('• Clear documentation of model logic', 'left', 45);

      // Feedback Integration
      pdfService.setCurrentY(6);
      pdfService.setCurrentY(20);


      // Ethical Considerations
      pdfService.drawHeading('4. Ethical Considerations', 'left');

      // Feedback Integration
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Feedback Integration', 'left',15);
      pdfService.setCurrentY(6);
      pdfService.drawWrappedText('• Question: What mechanisms are in place for gathering and integrating feedback to improve model performance and explainability?', 'left', 25);
      pdfService.drawWrappedText('• Answer: Feedback is collected via:', 'left', 25);
      pdfService.drawWrappedText('• User surveys', 'left',45);
      pdfService.drawWrappedText('• Stakeholder meetings','left', 45);
      pdfService.drawWrappedText('• An AI ethics committee that reviews and integrates feedback into model updates', 'left', 45);

      // Model Interpretability and Transparency
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Model Interpretability and Transparency', 'left',15);
      pdfService.drawWrappedText('• Answer: The model\'s architecture and outcomes are documented in detail, ensuring that stakeholders can understand and trust the predictions.', 'left', 25);

      // Ethical Considerations
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Ethical Considerations', 'left', 15);
      pdfService.drawWrappedText('• Answer: Ethical practices are embedded, focusing on fairness, non-discrimination, and adherence to medical ethical standards.', 'left', 25);

      // Outcomes Analysis and Back-testing
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Outcomes Analysis and Back-testing', 'left',15);
      pdfService.drawWrappedText('• Answer: Regular back-testing validates model predictions against real-world outcomes, ensuring ethical alignment and reliability.', 'left', 25);

      

      pdfService.setCurrentY(80);
      pdfService.drawHeading('5. Model Validation and Approval Status', 'left');
      pdfService.drawWrappedText('Document the validation activities, including the approval status, validation history, and key changes.', 'left');

      // Model Risk Tier
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Model Risk Tier:','left',15);
      pdfService.drawWrappedText('Tier 1', 'left', 15);

      // Approval Status
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Approval Status:','left',15);
      pdfService.drawWrappedText('05 - Validation complete', 'left', 15);

      // Validation Findings and Recommendations
      pdfService.setCurrentY(6);
      pdfService.drawSubHeader('Validation Findings and Recommendations:','left', 15);
      pdfService.drawWrappedText('- The model has undergone extensive validation, demonstrating high accuracy and reliability.', 'left', 25);

      const pdfBytes = await pdfService.generatePDF();

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=sample-model-card.pdf"
      );
      res.send(Buffer.from(pdfBytes));

})

app.get("/sample-model-card-pdfServiceReport", async (req, res) => {
  await pdfService.init();

  pdfService.setCurrentY(240);
  pdfService.drawWrappedText("Hello from Samplle pdf", "left", 6);
  pdfService.addLocalImage("./assets/graph1.png");
  await pdfService.addURLImage(
    "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  );

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/model-card-report", async (req, res) => {
  await pdfService.init();

  // pdfService.setCurrentY(24)0;
  // pdfService.setCurrentY(240);

  // // drawText("Model Card Report - The organization", { isBold: true, fontSize: 20, column: "left", color: rgb(0, 0.53, 0.71) });
  // pdfService.drawText("Model Card Report - Lumber Supply Chain Managers", {
  //   isBold: true,
  //   fontSize: 20,
  //   column: "left",
  //   color: rgb(0, 0.53, 0.71),
  // });

  // pdfService.setCurrentY(10);
  // pdfService.drawText("Report generated on - 08/08/2024", {
  //   fontSize: 12,
  //   column: "left",
  // });
  // // drawText("Report generated on - 24/10/2024", { fontSize: 12, column: "left" });

  // // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(10);
  // pdfService.drawText("Conducted By - FUSEFY", {
  //   fontSize: 12,
  //   column: "left",
  // });

  // pdfService.setCurrentY(240);
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Model Overview','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Details','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Technical Details','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Compliance and Governance','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Recommendations and Next Steps','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '7'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','9'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  //   "1. Executive Summary/Introduction .............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "2. Model Overview ............................................................................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "3. Model Purpose and Functionality ......................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "4. Technical Details ...............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "5. Model Performance and Impact Assessment.............(2)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "6. Compliance and Governance...........(4)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "7. Recommendations and Next Steps...................................(5)",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The Demand Forecasting Model is designed to predict future product demand, enabling businesses to optimize inventory levels and avoid situations of overstocking or stockouts. By leveraging historical sales data and external factors such as seasonal trends and promotions, the model supports effective supply chain management and decision-making processes.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. Model Overview", "left");
  pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  const tableDataRep = [
    {
      row: ['Model Name','Demand Forecasting Model'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Department','Planning and Forecasting'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Frequency of Use', 'Daily'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableDataRep, [175, 300]);
  pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("3. Model Details", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Input",'left',6);
  const modelInputs = [
    {
      row: ['yearmonth','year','month','location','sales(in $)','qty'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    // {
    //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
    //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
    //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
    //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    // },
    // {
    //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
    //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
    //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

    //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    // },
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  pdfService.setCurrentY(20);

  pdfService.drawSubHeader("Model Output",'left',6);
  
  const tableOutputData = [
    {
      row: ['Output Field','Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
    },
    {
      row: ['unique_id',	'Anonymized identifier for location and SKU'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
    },
    {
      row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['location',	'Anonymized location identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['sku',	'Anonymized SKU identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['division',	'Division'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['region',	'Region'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg1',	'Product hierarchy level 1'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg2',	'Product hierarchy level 2'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg3',	'Product hierarchy level 3'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['predicted_quantity',	'Predicted quantity for the given month'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    }
  ];

  pdfService.renderTable(tableOutputData, [150,300]);
  pdfService.setCurrentY(10);

  await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  pdfService.setCurrentY(15);

  pdfService.setCurrentY(20);
  pdfService.drawSubHeader('Model Paramaeters','left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  pdfService.drawWrappedText("• Market Trends",'left',16);
  pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  pdfService.drawWrappedText("• Promotions",'left',16);
  pdfService.drawWrappedText("• Economic Indicators",'left',16);
  pdfService.drawWrappedText(
    "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Model Purpose: Provide accurate demand predictions for planning decisions",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  pdfService.drawWrappedText('• Features Engineered:','left',30);
  pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  pdfService.drawWrappedText('• Trend Components','left',45);
  pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. Technical Details", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/dummy-3.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-4.png',120,0.4, 300);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('1. Demand Prediction','left',15);
  pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('2. Forecast Variability','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('3. Error Metrics','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The model adheres to Fusefy's AI governance standards and is designed to comply with industry-specific regulations. Responsible AI practices ensure the model's output aligns with ethical guidelines. Regular evaluations are performed to validate the model's reliability and accuracy.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance model accuracy by incorporating additional variables such as macroeconomic indicators.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Integrate model output with inventory management systems for real-time decision-making.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Monitor accuracy continuously and make model adjustments based on changing demand patterns.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Extend forecasting capabilities to consider seasonal and regional demand variations.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for GenAI App Used by Lumbar Supply Chain Managers','left',6);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Inadequate Prompt Engineering Leading to AI Hallucinations', 
        'The GenAI app lacks sufficient prompt engineering, causing the AI to generate hallucinations — incorrect or nonsensical responses.', 
        'Misleading information can lead to poor decision-making, operational inefficiencies, and loss of trust among supply chain managers.', 
        'Implement advanced prompt engineering techniques such as few-shot learning or integrate frameworks like LangChain to dynamically adjust inputs and improve response accuracy.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/risk-assessment-report-owasp", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','AI-Security Posture Management Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Regulatory policies used','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Assessment Strategy','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Roles and Responsibilities','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. AI Adoption Gap Analysis/Risk Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Unique vulnerabilities','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Roadmap Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Roadmap for mitigation of control maps','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. AI Adoption Strategy', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  // pdfService.drawSubHeader("Table Of Content", "left");
  // pdfService.setCurrentY(40);
  // pdfService.drawWrappedText(
  //   "1. Executive Summary/Introduction .............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "2. Model Overview ............................................................................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "3. Model Purpose and Functionality ......................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "4. Technical Details ...............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "5. Model Performance and Impact Assessment.............(2)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "6. Compliance and Governance...........(4)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "7. Recommendations and Next Steps...................................(5)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left")
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("This report evaluates the current state of AI adoption, identifies gaps in the adoption process, and provides strategic recommendations to enhance AI integration. The assessment is based on the OWASP framework and aligns with regulatory policies such as SR 11-7 and GDPR to ensure compliance and promote trustworthy AI practices. A roadmap for mitigating identified risks and maximizing ROI is also included.",'left');

  pdfService.setCurrentY(20);
  pdfService.drawHeading("2. Regulatory Policies used", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• OWASP: Open Web Application Security Project", 'left',6);
  pdfService.drawWrappedText("• SR 11-7: Supervisory guidance on Model Risk Management", 'left',6);
  pdfService.drawWrappedText("• GDPR: General Data Protection Regulation", 'left',6);

  pdfService.setCurrentY(20);
  pdfService.drawHeading("3. AI Assessment Strategy","left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI adoption assessment employs a structured framework to integrate control considerations throughout the AI lifecycle. This strategy ensures AI solutions are developed and operated following the principles of trustworthy AI.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Controls Considered','left');
  pdfService.drawWrappedText("• Accountability: Assign clear responsibilities for AI decisions and actions.",'left',6);
  pdfService.drawWrappedText("• Technical Robustness and Safety: Implement rigorous testing and validation.",'left',6);
  pdfService.drawWrappedText("• Diversity, Ethics, and Fairness: Ensure fairness and avoid biases.",'left',6);
  pdfService.drawWrappedText("• Privacy and Security: Ensure data protection and privacy concerns are addressed.",'left',6);
  pdfService.drawWrappedText("• Cyber Security and Privacy: Protect AI systems and data.", 'left', 6);
  pdfService.drawWrappedText("• Transparency and Explainability: Make AI decisions understandable.", 'left', 6);
  pdfService.drawWrappedText("• Legal Compliance: Adhere to relevant laws and regulations.", 'left', 6);
  pdfService.drawWrappedText("• Risk Scoring and Risk Cubrik: Detail the methodology for risk evaluation, including scoring systems and risk matrices.", 'left', 6);
  pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Contols Frameworks used','left');
  pdfService.drawWrappedText("We utilized the OWASP framework for the assessment, ensuring a comprehensive evaluation of AI-related risks and adherence to ethical standards",'left',6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Risk Evaluation",'left');
  pdfService.drawWrappedText("In our risk evaluation methodology, we leverage heatmap and risk matrices to comprehensively assess the multifaceted dimensions of risk inherent at each stage of AI model development. These tools allow us to analyze risks across multiple axes, including technical, ethical, and societal implications, aligning with our commitment to trustworthy AI controls.",'left',6);
  pdfService.setCurrentY(20);


  pdfService.drawHeading("4. Roles and Responsibilities","left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Modeler","left");
  pdfService.drawWrappedText("• Responsibilities: Responsible for building the AI model, documenting its development, and addressing any remediation efforts within the AI risk management framework.","left",6);
  pdfService.drawWrappedText("• Access Rights: View/edit model information, provide remediation plans, change blessing status.",'left',6);
  pdfService.drawWrappedText("• Scope: Division or AU level access to relevant models.",'left',6 );
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Assessor','left');
  pdfService.drawWrappedText("• Responsibilities: Manages the validation process for an AI model, guiding the scope, resourcing, and prioritization of work, performing validation tests and reviews.",'left',6);
  pdfService.drawWrappedText("• Access Rights: Complete AI Inventory Attestation for specific Assessment Units.",'left',6);
  pdfService.drawWrappedText("• Scope: Division Level AI Inventory Completeness Attestation.",'left',6);
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Admin','left');
  pdfService.drawWrappedText("• Responsibilities: Evaluates whether the AI risk management program is comprehensive, rigorous, and effective at both the individual and aggregate model levels.",'left',6);
  pdfService.drawWrappedText("• Access Rights: View all screens as viewable by MRM, download standard inventory export.",'left',6);
  pdfService.drawWrappedText("• Scope: External auditors with read-only access for compliance checks.",'left',6);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("5. AI Adoption Gap Analysis / Risk Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI Adoption Gap Analysis leverages frameworks such as OWASPand the EU AI Act to evaluate your AI capabilities against industry standards. Through a set of controls and targeted questions, we identify discrepancies between your existing practices and established benchmarks. By assessing the responses, we assign risk scores to highlight areas needing attention. The analysis reveals significant gaps in data handling, model training efficiencies, and operational integration, signaling a need for strategic enhancements in AI-driven decision-making processes. These findings underscore the importance of a comprehensive overhaul to align your AI practices with industry best practices and regulatory requirements, ensuring the responsible and effective deployment of AI technologies within the organization.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  
  pdfService.setCurrentY(10);

  
  // Risk Rating and Trustworthy AI Assessment
  pdfService.drawSubHeader("Risk Rating and Trustworthy AI Assessment",'left');
  // pdfService.drawSubheader("");
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText("High Risk (Tier 1): Predictive maintenance models in manufacturing lacking robust safety measures.", 'left', 6);
  // pdfService.setCurrentY(10);
  // pdfService.drawSubheader("");
  pdfService.drawWrappedText("Moderate Risk (Tier 2): AI-driven marketing campaigns with potential bias in customer segmentation.", 'left', 6);
  // pdfService.setCurrentY(10);
  pdfService.drawWrappedText("Low Risk (Tier 3): Internal chatbots for employee queries with minimal impact.", 'left', 6);
  pdfService.setCurrentY(20);

  // Assessment in Progress
  pdfService.drawHeading("6. Assessment in Progress",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("June 03,2024 to June 06,2024",'left',6);
  pdfService.setCurrentY(3);
  const details = [
    {
      row: ['Tested', '140 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,1,0),rgb(0,1,0)]
    },
    {
      row: ['In Progress', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.53, 0.81, 0.92), rgb(0.53, 0.81, 0.92)]
    },
    {
      row: ['Not Tested', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(1, 0.65, 0), rgb(1, 0.65, 0)]
    },
    {
      row: ['Not Applicable', '2 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    }
  ];
  pdfService.renderTable(details, [80, 80]);
  // pdfService.drawWrappedText("Open image-20240606-170750.png", 'left', 6);
  // pdfService.drawWrappedText("Tue Jun 03 2024 to Thu Jun 06 2024", 'left', 6);
  pdfService.setCurrentY(30);

  // Unique Vulnerabilities
  pdfService.drawHeading("7. Unique Vulnerabilities",'left');
  pdfService.setCurrentY(3);
  const vulDetails = [
    {
      row: ['Total', '39'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 0.55, 0), rgb(1, 0.55, 0)]
    },
    {
      row: ['Critical', '1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    },
    {
      row: ['High', '10'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,0,0), rgb(1,0,0)]
    },
    {
      row: ['Medium', '14'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0), rgb(1, 1, 0)]
    },
    {
      row: ['Low', '12'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.33, 0.75, 0.83),rgb(0.33, 0.75, 0.83)]
    },
    {
      row: ['Info', '4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0,1,0), rgb(0,1,0)]
    }
  ];
  pdfService.renderTable(vulDetails, [120,120]);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/vulnerabilities-report.png', 240);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(40);

  // Roadmap Summary
  pdfService.drawHeading("8. Roadmap Summary",'left');
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/roadmap-updated.png",230, 0.75);
  pdfService.setCurrentY(25);
  pdfService.drawWrappedText("The roadmap outlines key steps to address gaps, enhance AI capabilities, and ensure compliance with industry regulations.", 'left');
  pdfService.setCurrentY(20);

  // Roadmap for Mitigation of Control Gaps
  pdfService.drawHeading("9. Roadmap for Mitigation of Control Gaps",'left');
  pdfService.drawSubHeader("Short-term (0-6 months)",'left');
  pdfService.drawWrappedText("• Implement Data Governance Framework: Improve data quality and consistency.", 'left', 6);
  pdfService.drawWrappedText("• Enhance AI Training Programs: Upskill employees in AI and data science.", 'left', 6);
  pdfService.drawWrappedText("• Integrate AI with Legacy Systems: Develop strategies for seamless integration.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Medium-term (6-12 months)",'left');
  pdfService.drawWrappedText("• Develop Comprehensive AI Strategy: Align AI initiatives with business goals.", 'left', 6);
  pdfService.drawWrappedText("• Strengthen AI Governance: Establish robust governance frameworks.", 'left', 6);
  pdfService.drawWrappedText("• Increase AI Transparency: Implement tools for explainability and transparency.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Long-term (12+ months)",'left');
  pdfService.drawWrappedText("• Scale AI Infrastructure: Invest in scalable cloud solutions.", 'left', 6);
  pdfService.drawWrappedText("• Continuous Monitoring: Establish ongoing performance and risk monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Regulatory Compliance: Ensure all AI models comply with industry-specific regulations.", 'left', 6);
  pdfService.setCurrentY(10);

  // AI Adoption Strategy
  pdfService.drawHeading("10. AI Adoption Strategy",'left');
  pdfService.drawWrappedText("Crafting an effective AI adoption strategy is essential to bridge identified gaps and propel organizational advancement...", 'left', 6);
  pdfService.setCurrentY(10);

  // Remediation Progress
  pdfService.drawHeading("Remediation Progress",'left');
  pdfService.setCurrentY(3);
  // const remediationTable = [
  //   {
  //     row: ['Closed', '13'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(0, 0.5, 0),rgb(0, 0.5, 0)]
  //   },
  //   {
  //     row: ['Retest', '0'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0.55, 0),rgb(1, 0.55, 0)]
  //   },
  //   {
  //     row: ['Open', '32'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0, 0),rgb(1, 0, 0)]
  //   }
  // ];
  
  await pdfService.addLocalImage('./assets/remediation-progress.png',240);
  
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText("• Closed - 13",'left',16);
  pdfService.drawWrappedText("• Retest - 0",'left',16);
  pdfService.drawWrappedText("• Open - 32",'left',16);

  // pdfService.renderTable(remediationTable, [100,100]);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(20);

  // TCO/ROI Analysis
  pdfService.drawHeading("TCO/ROI Analysis",'left');
  pdfService.drawSubHeader("Total Cost of Ownership (TCO)",'left',6);
  pdfService.drawWrappedText("• Initial Investment: $2 million for infrastructure and training.", 'left', 6);
  pdfService.drawWrappedText("• Operational Costs: $500,000 annually for maintenance and monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Integration Costs: $1 million for system integration and upgrades.", 'left', 6);

  pdfService.drawSubHeader("Return on Investment (ROI)",'left');
  pdfService.drawWrappedText("• Efficiency Gains: $1.5 million annual savings from predictive maintenance.", 'left', 6);
  pdfService.drawWrappedText("• Revenue Growth: $2 million annual increase from AI-driven marketing.", 'left', 6);
  pdfService.drawWrappedText("• Cost Savings: $300,000 annual savings from automated customer service.", 'left', 6);
  pdfService.setCurrentY(20);

  // Summary
  // pdfService.setCurrentY(250);
  pdfService.drawHeading("Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  pdfService.setCurrentY(3);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Unscanned SBOM in Open-Source Libraries Leading to Vulnerabilities', 
        'The Software Bill of Materials (SBOM) for open-source libraries used in model deployments is not regularly scanned. This oversight can allow backdoor vulnerabilities within these libraries to go undetected, posing security risks to the supply chain system.', 
        'Potential exploitation of unpatched vulnerabilities, leading to data breaches, system downtime, and loss of stakeholder trust.', 
        'Implement regular vulnerability scanning of SBOMs using tools like OWASP Dependency-Check. Establish a process for continuous monitoring and updating of open-source components.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    {
      row: [
        '2', 
        'Licensing Issues with Reference Datasets Used for Model Training', 
        'The datasets used for training the model may have licensing restrictions that are not being adhered to, potentially violating legal agreements or intellectual property rights. This non-compliance can result in legal action against Lumabr and harm its reputation.', 
        'Legal penalties, financial fines, and reputational damage due to infringement of data usage agreements and intellectual property laws.', 
        'Conduct a thorough review of all dataset licenses. Ensure compliance by obtaining necessary permissions or replacing datasets with appropriately licensed alternatives.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120]);
  pdfService.setCurrentY(130);
  const tbData2 = [
    {
      row: [
        '3', 
        'Lack of Authorization Controls on S3 Storage for Training Data', 
        'The Amazon S3 storage used for training data lacks proper authorization controls. This vulnerability exposes the data to unauthorized access and potential data poisoning attacks, where malicious actors could alter the training data to compromise the model\'s integrity.', 
        'Unauthorized data manipulation, leading to compromised model performance, inaccurate forecasts, and potential financial and reputational losses.', 
        'Implement role-based access control (RBAC) on S3 storage. Use AWS Identity and Access Management (IAM) policies to restrict access and protect data integrity.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  {
      row: [
        '4', 
        'Insufficient Data Encryption Exposing Sensitive Information', 
        'Training data and model outputs are not adequately encrypted during storage and transmission. This inadequacy increases the risk of data interception and unauthorized access, potentially leading to data breaches involving sensitive company and customer information.', 
        'Exposure of confidential data, resulting in compliance violations, legal consequences, and loss of customer and stakeholder trust.', 
        'Apply strong encryption methods for data at rest (e.g., AES-256 encryption) and in transit (e.g., TLS/SSL). Regularly audit encryption practices to ensure they meet current security standards.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  }
  ];
  pdfService.renderTable(tbData2, [50, 110,110,110,120]);
  pdfService.setCurrentY(40);
  // pdfService.setCurrentY(3);
  // const summaryTable = [
  //   {
  //     row: ['Priority', 'Vulnerability','Status'],
  //     color: [rgb(1,1,1), rgb(1,1,1),rgb(1,1,1)],
  //     bgColor: [rgb(0,0,0.3), rgb(0,0,0.3), rgb(0,0,0.3)]

  //   },
  //   {
  //     row: ['Critical', 'Unrestricted Upload of File with Dangerous Type','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Inconsistent Access Control','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Relative Path Traversal' ,'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
    
  //   },
  //   { 
  //     row: ['HIGH', 'Reflected Cross Site Scripting', 'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Blind SQL Injection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Persistent Cross Site Scripting','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','Unsupported Web Server Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','SSL Version 2 and 3 Protocol Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'PHP Unsupported Version Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Weak Password Policy','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Session Fixation','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Ciphers','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM','Reflected Cross Site Scripting','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Cross Site Request Forgery (CSRF)','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Functionality Misuse','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];
  // pdfService.renderTable(summaryTable, [100, 180, 100]);
  // pdfService.setCurrentY(15);
  // const tableData2 = [
  //   {
  //     row: ['MEDIUM', 'No Account Lockout May Facilitate Brute Force Password Attack','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Open Redirection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Self-Signed Certificate','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate cannot be Trusted','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Medium Strength Cipher Suites Supported (SWEET32)','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Signed Using Weak Hashing Algorithm','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Cipher Suites Supported','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Expiry','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Multiple Simultaneous User Sessions','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'HTML 5 Cross Origin Resource Sharing','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Missing X-XSS-Protection Header','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie Without HTTP Only Flag Set','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Strict Transport Security Policy Not Enforced','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Outdated Version of JQuery','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie With Secure Flag Missing','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'User Enumeration','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Server Discloses Supporting Technology','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Framing Protection','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Session Expiration','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'SSL RC4 Cipher Suites Supported (Bar Mitzvah)','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Inducing Account Lockout','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.1 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'nginx HTTP Server Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.0 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];
  // pdfService.setCurrentY(80);
  // pdfService.renderTable(tableData2, [100, 180, 100]);
  // pdfService.drawWrappedText("This report evaluates AI adoption, identifying gaps and providing strategic recommendations for improvement...", 'left', 6);
  pdfService.setCurrentY(10);




  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=risk-assessment-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
})


app.get("/risk-assessment-report-nist", async (req, res) => {

  await pdfService.init();

  // // pdfService.setCurrentY(24)0;
  // pdfService.setCurrentY(240);

  // // drawText("Model Card Report - The organization", { isBold: true, fontSize: 20, column: "left", color: rgb(0, 0.53, 0.71) });
  // pdfService.drawText("AI-Security Posture Management Report", {
  //   isBold: true,
  //   fontSize: 20,
  //   column: "left",
  //   color: rgb(0, 0.53, 0.71),
  // });

  // pdfService.drawText("- Lumbar Supply chain Managers", {
  //   isBold: true,
  //   fontSize: 20,
  //   column: "left",
  //   color: rgb(0, 0.53, 0.71),
  // });

  // pdfService.setCurrentY(10);
  // pdfService.drawText("Report generated on - 08/08/2024", {
  //   fontSize: 12,
  //   column: "left",
  // });
  // drawText("Report generated on - 24/10/2024", { fontSize: 12, column: "left" });

  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(10);
  // pdfService.drawText("Conducted By - FUSEFY", {
  //   fontSize: 12,
  //   column: "left",
  // });

  // pdfService.setCurrentY(240);

  // pdfService.setCurrentY(180);
  
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','AI Bill of Materials and Risk Management Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Regulatory policies used','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Assessment Strategy','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Roles and Responsibilities','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. AI Adoption Gap Analysis/Risk Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Unique vulnerabilities','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Roadmap Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Roadmap for mitigation of control maps','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. AI Adoption Strategy', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  // pdfService.drawSubHeader("Table Of Content", "left");
  // pdfService.setCurrentY(40);
  // pdfService.drawWrappedText(
  //   "1. Executive Summary/Introduction .............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "2. Model Overview ............................................................................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "3. Model Purpose and Functionality ......................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "4. Technical Details ...............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "5. Model Performance and Impact Assessment.............(2)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "6. Compliance and Governance...........(4)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "7. Recommendations and Next Steps...................................(5)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left")
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("This report evaluates the current state of AI adoption, identifies gaps in the adoption process, and provides strategic recommendations to enhance AI integration. The assessment is based on the NIST framework and aligns with regulatory policies such as SR 11-7 and GDPR to ensure compliance and promote trustworthy AI practices. A roadmap for mitigating identified risks and maximizing ROI is also included.",'left');

  pdfService.setCurrentY(20);
  pdfService.drawHeading("2. Regulatory Policies used", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• NIST: National Institute of Standards and Technology", 'left',6);
  pdfService.drawWrappedText("• SR 11-7: Supervisory guidance on Model Risk Management", 'left',6);
  pdfService.drawWrappedText("• GDPR: General Data Protection Regulation", 'left',6);

  pdfService.setCurrentY(20);
  pdfService.drawHeading("3. AI Assessment Strategy","left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI adoption assessment employs a structured framework to integrate control considerations throughout the AI lifecycle. This strategy ensures AI solutions are developed and operated following the principles of trustworthy AI.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Controls Considered','left');
  pdfService.drawWrappedText("• Accountability: Assign clear responsibilities for AI decisions and actions.",'left',6);
  pdfService.drawWrappedText("• Technical Robustness and Safety: Implement rigorous testing and validation.",'left',6);
  pdfService.drawWrappedText("• Diversity, Ethics, and Fairness: Ensure fairness and avoid biases.",'left',6);
  pdfService.drawWrappedText("• Privacy and Security: Ensure data protection and privacy concerns are addressed.",'left',6);
  pdfService.drawWrappedText("• Cyber Security and Privacy: Protect AI systems and data.", 'left', 6);
  pdfService.drawWrappedText("• Transparency and Explainability: Make AI decisions understandable.", 'left', 6);
  pdfService.drawWrappedText("• Legal Compliance: Adhere to relevant laws and regulations.", 'left', 6);
  pdfService.drawWrappedText("• Risk Scoring and Risk Cubrik: Detail the methodology for risk evaluation, including scoring systems and risk matrices.", 'left', 6);
  pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Contols Frameworks used','left');
  pdfService.drawWrappedText("We utilized the NIST framework for the assessment, ensuring a comprehensive evaluation of AI-related risks and adherence to ethical standards",'left',6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Risk Evaluation",'left');
  pdfService.drawWrappedText("In our risk evaluation methodology, we leverage heatmap and risk matrices to comprehensively assess the multifaceted dimensions of risk inherent at each stage of AI model development. These tools allow us to analyze risks across multiple axes, including technical, ethical, and societal implications, aligning with our commitment to trustworthy AI controls.",'left',6);
  pdfService.setCurrentY(20);


  pdfService.drawHeading("4. Roles and Responsibilities","left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Modeler","left");
  pdfService.drawWrappedText("• Responsibilities: Responsible for building the AI model, documenting its development, and addressing any remediation efforts within the AI risk management framework.","left",6);
  pdfService.drawWrappedText("• Access Rights: View/edit model information, provide remediation plans, change blessing status.",'left',6);
  pdfService.drawWrappedText("• Scope: Division or AU level access to relevant models.",'left',6 );
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Assessor','left');
  pdfService.drawWrappedText("• Responsibilities: Manages the validation process for an AI model, guiding the scope, resourcing, and prioritization of work, performing validation tests and reviews.",'left',6);
  pdfService.drawWrappedText("• Access Rights: Complete AI Inventory Attestation for specific Assessment Units.",'left',6);
  pdfService.drawWrappedText("• Scope: Division Level AI Inventory Completeness Attestation.",'left',6);
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Admin','left');
  pdfService.drawWrappedText("• Responsibilities: Evaluates whether the AI risk management program is comprehensive, rigorous, and effective at both the individual and aggregate model levels.",'left',6);
  pdfService.drawWrappedText("• Access Rights: View all screens as viewable by MRM, download standard inventory export.",'left',6);
  pdfService.drawWrappedText("• Scope: External auditors with read-only access for compliance checks.",'left',6);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("5. AI Adoption Gap Analysis / Risk Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI Adoption Gap Analysis leverages frameworks such as OWASPand the EU AI Act to evaluate your AI capabilities against industry standards. Through a set of controls and targeted questions, we identify discrepancies between your existing practices and established benchmarks. By assessing the responses, we assign risk scores to highlight areas needing attention. The analysis reveals significant gaps in data handling, model training efficiencies, and operational integration, signaling a need for strategic enhancements in AI-driven decision-making processes. These findings underscore the importance of a comprehensive overhaul to align your AI practices with industry best practices and regulatory requirements, ensuring the responsible and effective deployment of AI technologies within the organization.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  
  pdfService.setCurrentY(10);

  
  // Risk Rating and Trustworthy AI Assessment
  pdfService.drawSubHeader("Risk Rating and Trustworthy AI Assessment",'left');
  // pdfService.drawSubheader("");
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText("High Risk (Tier 1): Predictive maintenance models in manufacturing lacking robust safety measures.", 'left', 6);
  // pdfService.setCurrentY(10);
  // pdfService.drawSubheader("");
  pdfService.drawWrappedText("Moderate Risk (Tier 2): AI-driven marketing campaigns with potential bias in customer segmentation.", 'left', 6);
  // pdfService.setCurrentY(10);
  pdfService.drawWrappedText("Low Risk (Tier 3): Internal chatbots for employee queries with minimal impact.", 'left', 6);
  pdfService.setCurrentY(20);

  // Assessment in Progress
  pdfService.drawHeading("6. Assessment in Progress",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("June 03,2024 to June 06,2024",'left',6);
  pdfService.setCurrentY(3);
  const details = [
    {
      row: ['Tested', '140 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,1,0),rgb(0,1,0)]
    },
    {
      row: ['In Progress', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.53, 0.81, 0.92), rgb(0.53, 0.81, 0.92)]
    },
    {
      row: ['Not Tested', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(1, 0.65, 0), rgb(1, 0.65, 0)]
    },
    {
      row: ['Not Applicable', '2 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    }
  ];
  pdfService.renderTable(details, [80, 80]);
  // pdfService.drawWrappedText("Open image-20240606-170750.png", 'left', 6);
  // pdfService.drawWrappedText("Tue Jun 03 2024 to Thu Jun 06 2024", 'left', 6);
  pdfService.setCurrentY(30);

  // Unique Vulnerabilities
  pdfService.drawHeading("7. Unique Vulnerabilities",'left');
  pdfService.setCurrentY(3);
  const vulDetails = [
    {
      row: ['Total', '39'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 0.55, 0), rgb(1, 0.55, 0)]
    },
    {
      row: ['Critical', '1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    },
    {
      row: ['High', '10'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,0,0), rgb(1,0,0)]
    },
    {
      row: ['Medium', '14'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0), rgb(1, 1, 0)]
    },
    {
      row: ['Low', '12'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.33, 0.75, 0.83),rgb(0.33, 0.75, 0.83)]
    },
    {
      row: ['Info', '4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0,1,0), rgb(0,1,0)]
    }
  ];
  pdfService.renderTable(vulDetails, [120,120]);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/vulnerabilities-report.png', 240);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(40);

  // Roadmap Summary
  pdfService.drawHeading("8. Roadmap Summary",'left');
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/roadmap-updated.png",230, 0.75);
  pdfService.setCurrentY(25);
  pdfService.drawWrappedText("The roadmap outlines key steps to address gaps, enhance AI capabilities, and ensure compliance with industry regulations.", 'left');
  pdfService.setCurrentY(20);

  // Roadmap for Mitigation of Control Gaps
  pdfService.drawHeading("9. Roadmap for Mitigation of Control Gaps",'left');
  pdfService.drawSubHeader("Short-term (0-6 months)",'left');
  pdfService.drawWrappedText("• Implement Data Governance Framework: Improve data quality and consistency.", 'left', 6);
  pdfService.drawWrappedText("• Enhance AI Training Programs: Upskill employees in AI and data science.", 'left', 6);
  pdfService.drawWrappedText("• Integrate AI with Legacy Systems: Develop strategies for seamless integration.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Medium-term (6-12 months)",'left');
  pdfService.drawWrappedText("• Develop Comprehensive AI Strategy: Align AI initiatives with business goals.", 'left', 6);
  pdfService.drawWrappedText("• Strengthen AI Governance: Establish robust governance frameworks.", 'left', 6);
  pdfService.drawWrappedText("• Increase AI Transparency: Implement tools for explainability and transparency.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Long-term (12+ months)",'left');
  pdfService.drawWrappedText("• Scale AI Infrastructure: Invest in scalable cloud solutions.", 'left', 6);
  pdfService.drawWrappedText("• Continuous Monitoring: Establish ongoing performance and risk monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Regulatory Compliance: Ensure all AI models comply with industry-specific regulations.", 'left', 6);
  pdfService.setCurrentY(10);

  // AI Adoption Strategy
  pdfService.drawHeading("10. AI Adoption Strategy",'left');
  pdfService.drawWrappedText("Crafting an effective AI adoption strategy is essential to bridge identified gaps and propel organizational advancement...", 'left', 6);
  pdfService.setCurrentY(10);

  // Remediation Progress
  pdfService.drawHeading("Remediation Progress",'left');
  pdfService.setCurrentY(3);
  // const remediationTable = [
  //   {
  //     row: ['Closed', '13'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(0, 0.5, 0),rgb(0, 0.5, 0)]
  //   },
  //   {
  //     row: ['Retest', '0'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0.55, 0),rgb(1, 0.55, 0)]
  //   },
  //   {
  //     row: ['Open', '32'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0, 0),rgb(1, 0, 0)]
  //   }
  // ];
  
  await pdfService.addLocalImage('./assets/remediation-progress.png',240);
  
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText("• Closed - 13",'left',16);
  pdfService.drawWrappedText("• Retest - 0",'left',16);
  pdfService.drawWrappedText("• Open - 32",'left',16);

  // pdfService.renderTable(remediationTable, [100,100]);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(20);

  // TCO/ROI Analysis
  pdfService.drawHeading("TCO/ROI Analysis",'left');
  pdfService.drawSubHeader("Total Cost of Ownership (TCO)",'left',6);
  pdfService.drawWrappedText("• Initial Investment: $2 million for infrastructure and training.", 'left', 6);
  pdfService.drawWrappedText("• Operational Costs: $500,000 annually for maintenance and monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Integration Costs: $1 million for system integration and upgrades.", 'left', 6);

  pdfService.drawSubHeader("Return on Investment (ROI)",'left');
  pdfService.drawWrappedText("• Efficiency Gains: $1.5 million annual savings from predictive maintenance.", 'left', 6);
  pdfService.drawWrappedText("• Revenue Growth: $2 million annual increase from AI-driven marketing.", 'left', 6);
  pdfService.drawWrappedText("• Cost Savings: $300,000 annual savings from automated customer service.", 'left', 6);
  pdfService.setCurrentY(20);

  // Summary
  // pdfService.setCurrentY(250);
  pdfService.drawHeading("Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  pdfService.setCurrentY(3);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Unscanned SBOM in Open-Source Libraries Leading to Vulnerabilities', 
        'The Software Bill of Materials (SBOM) for open-source libraries used in model deployments is not regularly scanned. This oversight can allow backdoor vulnerabilities within these libraries to go undetected, posing security risks to the supply chain system.', 
        'Potential exploitation of unpatched vulnerabilities, leading to data breaches, system downtime, and loss of stakeholder trust.', 
        'Implement regular vulnerability scanning of SBOMs using tools like OWASP Dependency-Check. Establish a process for continuous monitoring and updating of open-source components.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    {
      row: [
        '2', 
        'Licensing Issues with Reference Datasets Used for Model Training', 
        'The datasets used for training the model may have licensing restrictions that are not being adhered to, potentially violating legal agreements or intellectual property rights. This non-compliance can result in legal action against Lumabr and harm its reputation.', 
        'Legal penalties, financial fines, and reputational damage due to infringement of data usage agreements and intellectual property laws.', 
        'Conduct a thorough review of all dataset licenses. Ensure compliance by obtaining necessary permissions or replacing datasets with appropriately licensed alternatives.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120]);
  pdfService.setCurrentY(130);
  const tbData2 = [
    {
      row: [
        '3', 
        'Lack of Authorization Controls on S3 Storage for Training Data', 
        'The Amazon S3 storage used for training data lacks proper authorization controls. This vulnerability exposes the data to unauthorized access and potential data poisoning attacks, where malicious actors could alter the training data to compromise the model\'s integrity.', 
        'Unauthorized data manipulation, leading to compromised model performance, inaccurate forecasts, and potential financial and reputational losses.', 
        'Implement role-based access control (RBAC) on S3 storage. Use AWS Identity and Access Management (IAM) policies to restrict access and protect data integrity.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  {
      row: [
        '4', 
        'Insufficient Data Encryption Exposing Sensitive Information', 
        'Training data and model outputs are not adequately encrypted during storage and transmission. This inadequacy increases the risk of data interception and unauthorized access, potentially leading to data breaches involving sensitive company and customer information.', 
        'Exposure of confidential data, resulting in compliance violations, legal consequences, and loss of customer and stakeholder trust.', 
        'Apply strong encryption methods for data at rest (e.g., AES-256 encryption) and in transit (e.g., TLS/SSL). Regularly audit encryption practices to ensure they meet current security standards.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  }
  ];
  pdfService.renderTable(tbData2, [50, 110,110,110,120]);
  pdfService.setCurrentY(40);
  // pdfService.setCurrentY(3);
  // const summaryTable = [
  //   {
  //     row: ['Priority', 'Vulnerability','Status'],
  //     color: [rgb(1,1,1), rgb(1,1,1),rgb(1,1,1)],
  //     bgColor: [rgb(0,0,0.3), rgb(0,0,0.3), rgb(0,0,0.3)]

  //   },
  //   {
  //     row: ['Critical', 'Unrestricted Upload of File with Dangerous Type','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Inconsistent Access Control','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Relative Path Traversal' ,'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
    
  //   },
  //   { 
  //     row: ['HIGH', 'Reflected Cross Site Scripting', 'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Blind SQL Injection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Persistent Cross Site Scripting','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','Unsupported Web Server Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','SSL Version 2 and 3 Protocol Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'PHP Unsupported Version Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Weak Password Policy','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Session Fixation','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Ciphers','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM','Reflected Cross Site Scripting','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Cross Site Request Forgery (CSRF)','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Functionality Misuse','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];
  // pdfService.renderTable(summaryTable, [100, 180, 100]);
  // pdfService.setCurrentY(15);
  // const tableData2 = [
  //   {
  //     row: ['MEDIUM', 'No Account Lockout May Facilitate Brute Force Password Attack','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Open Redirection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Self-Signed Certificate','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate cannot be Trusted','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Medium Strength Cipher Suites Supported (SWEET32)','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Signed Using Weak Hashing Algorithm','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Cipher Suites Supported','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Expiry','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Multiple Simultaneous User Sessions','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'HTML 5 Cross Origin Resource Sharing','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Missing X-XSS-Protection Header','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie Without HTTP Only Flag Set','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Strict Transport Security Policy Not Enforced','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Outdated Version of JQuery','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie With Secure Flag Missing','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'User Enumeration','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Server Discloses Supporting Technology','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Framing Protection','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Session Expiration','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'SSL RC4 Cipher Suites Supported (Bar Mitzvah)','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Inducing Account Lockout','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.1 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'nginx HTTP Server Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.0 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];
  // pdfService.setCurrentY(80);
  // pdfService.renderTable(tableData2, [100, 180, 100]);
  // pdfService.drawWrappedText("This report evaluates AI adoption, identifying gaps and providing strategic recommendations for improvement...", 'left', 6);
  pdfService.setCurrentY(10);




  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=risk-assessment-report-nist.pdf"
  );
  res.send(Buffer.from(pdfBytes));
})


app.get("/risk-assessment-report-chai", async (req, res) => {
  await pdfService.init();
  
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','AI Bill of Materials and Risk Management Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Regulatory policies used','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Assessment Strategy','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Roles and Responsibilities','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. AI Adoption Gap Analysis/Risk Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Unique vulnerabilities','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Roadmap Summary','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Roadmap for mitigation of control maps','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. AI Adoption Strategy', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  // pdfService.drawSubHeader("Table Of Content", "left");
  // pdfService.setCurrentY(40);
  // pdfService.drawWrappedText(
  //   "1. Executive Summary/Introduction .............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "2. Model Overview ............................................................................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "3. Model Purpose and Functionality ......................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "4. Technical Details ...............................(1)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "5. Model Performance and Impact Assessment.............(2)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "6. Compliance and Governance...........(4)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);
  // pdfService.drawWrappedText(
  //   "7. Recommendations and Next Steps...................................(5)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left")
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("This report evaluates the current state of AI adoption, identifies gaps in the adoption process, and provides strategic recommendations to enhance AI integration. The assessment is based on the CHAI framework and aligns with regulatory policies such as SR 11-7 and GDPR to ensure compliance and promote trustworthy AI practices. A roadmap for mitigating identified risks and maximizing ROI is also included.",'left');

  pdfService.setCurrentY(20);
  pdfService.drawHeading("2. Regulatory Policies used", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• CHAI: Center for Human-AI Interaction", 'left',6);
  pdfService.drawWrappedText("• SR 11-7: Supervisory guidance on Model Risk Management", 'left',6);
  pdfService.drawWrappedText("• GDPR: General Data Protection Regulation", 'left',6);

  pdfService.setCurrentY(20);
  pdfService.drawHeading("3. AI Assessment Strategy","left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI adoption assessment employs a structured framework to integrate control considerations throughout the AI lifecycle. This strategy ensures AI solutions are developed and operated following the principles of trustworthy AI.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Controls Considered','left');
  pdfService.drawWrappedText("• Accountability: Assign clear responsibilities for AI decisions and actions.",'left',6);
  pdfService.drawWrappedText("• Technical Robustness and Safety: Implement rigorous testing and validation.",'left',6);
  pdfService.drawWrappedText("• Diversity, Ethics, and Fairness: Ensure fairness and avoid biases.",'left',6);
  pdfService.drawWrappedText("• Privacy and Security: Ensure data protection and privacy concerns are addressed.",'left',6);
  pdfService.drawWrappedText("• Cyber Security and Privacy: Protect AI systems and data.", 'left', 6);
  pdfService.drawWrappedText("• Transparency and Explainability: Make AI decisions understandable.", 'left', 6);
  pdfService.drawWrappedText("• Legal Compliance: Adhere to relevant laws and regulations.", 'left', 6);
  pdfService.drawWrappedText("• Risk Scoring and Risk Cubrik: Detail the methodology for risk evaluation, including scoring systems and risk matrices.", 'left', 6);
  pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Contols Frameworks used','left');
  pdfService.drawWrappedText("We utilized the NIST framework for the assessment, ensuring a comprehensive evaluation of AI-related risks and adherence to ethical standards",'left',6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Risk Evaluation",'left');
  pdfService.drawWrappedText("In our risk evaluation methodology, we leverage heatmap and risk matrices to comprehensively assess the multifaceted dimensions of risk inherent at each stage of AI model development. These tools allow us to analyze risks across multiple axes, including technical, ethical, and societal implications, aligning with our commitment to trustworthy AI controls.",'left',6);
  pdfService.setCurrentY(20);


  pdfService.drawHeading("4. Roles and Responsibilities","left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Modeler","left");
  pdfService.drawWrappedText("• Responsibilities: Responsible for building the AI model, documenting its development, and addressing any remediation efforts within the AI risk management framework.","left",6);
  pdfService.drawWrappedText("• Access Rights: View/edit model information, provide remediation plans, change blessing status.",'left',6);
  pdfService.drawWrappedText("• Scope: Division or AU level access to relevant models.",'left',6 );
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Assessor','left');
  pdfService.drawWrappedText("• Responsibilities: Manages the validation process for an AI model, guiding the scope, resourcing, and prioritization of work, performing validation tests and reviews.",'left',6);
  pdfService.drawWrappedText("• Access Rights: Complete AI Inventory Attestation for specific Assessment Units.",'left',6);
  pdfService.drawWrappedText("• Scope: Division Level AI Inventory Completeness Attestation.",'left',6);
  // pdfService.setCurrentY(10);
  pdfService.drawSubHeader('Admin','left');
  pdfService.drawWrappedText("• Responsibilities: Evaluates whether the AI risk management program is comprehensive, rigorous, and effective at both the individual and aggregate model levels.",'left',6);
  pdfService.drawWrappedText("• Access Rights: View all screens as viewable by MRM, download standard inventory export.",'left',6);
  pdfService.drawWrappedText("• Scope: External auditors with read-only access for compliance checks.",'left',6);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("5. AI Adoption Gap Analysis / Risk Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The AI Adoption Gap Analysis leverages frameworks such as CHAI to evaluate your AI capabilities against industry standards. Through a set of controls and targeted questions, we identify discrepancies between your existing practices and established benchmarks. By assessing the responses, we assign risk scores to highlight areas needing attention. The analysis reveals significant gaps in data handling, model training efficiencies, and operational integration, signaling a need for strategic enhancements in AI-driven decision-making processes. These findings underscore the importance of a comprehensive overhaul to align your AI practices with industry best practices and regulatory requirements, ensuring the responsible and effective deployment of AI technologies within the organization.",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  
  pdfService.setCurrentY(10);

  
  // Risk Rating and Trustworthy AI Assessment
  pdfService.drawSubHeader("Risk Rating and Trustworthy AI Assessment",'left');
  // pdfService.drawSubheader("");
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText("High Risk (Tier 1): Predictive maintenance models in manufacturing lacking robust safety measures.", 'left', 6);
  // pdfService.setCurrentY(10);
  // pdfService.drawSubheader("");
  pdfService.drawWrappedText("Moderate Risk (Tier 2): AI-driven marketing campaigns with potential bias in customer segmentation.", 'left', 6);
  // pdfService.setCurrentY(10);
  pdfService.drawWrappedText("Low Risk (Tier 3): Internal chatbots for employee queries with minimal impact.", 'left', 6);
  pdfService.setCurrentY(20);

  // Assessment in Progress
  pdfService.drawHeading("6. Assessment in Progress",'left');
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("June 03,2024 to June 06,2024",'left',6);
  pdfService.setCurrentY(3);
  const details = [
    {
      row: ['Tested', '140 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,1,0),rgb(0,1,0)]
    },
    {
      row: ['In Progress', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.53, 0.81, 0.92), rgb(0.53, 0.81, 0.92)]
    },
    {
      row: ['Not Tested', '0 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(1, 0.65, 0), rgb(1, 0.65, 0)]
    },
    {
      row: ['Not Applicable', '2 / 142'],
      color: [rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    }
  ];
  pdfService.renderTable(details, [80, 80]);
  // pdfService.drawWrappedText("Open image-20240606-170750.png", 'left', 6);
  // pdfService.drawWrappedText("Tue Jun 03 2024 to Thu Jun 06 2024", 'left', 6);
  pdfService.setCurrentY(30);

  // Unique Vulnerabilities
  pdfService.drawHeading("7. Unique Vulnerabilities",'left');
  pdfService.setCurrentY(3);
  const vulDetails = [
    {
      row: ['Total', '39'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 0.55, 0), rgb(1, 0.55, 0)]
    },
    {
      row: ['Critical', '1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.5, 0, 0.5), rgb(0.5, 0, 0.5)]
    },
    {
      row: ['High', '10'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,0,0), rgb(1,0,0)]
    },
    {
      row: ['Medium', '14'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0), rgb(1, 1, 0)]
    },
    {
      row: ['Low', '12'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0.33, 0.75, 0.83),rgb(0.33, 0.75, 0.83)]
    },
    {
      row: ['Info', '4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(0,1,0), rgb(0,1,0)]
    }
  ];
  pdfService.renderTable(vulDetails, [120,120]);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/vulnerabilities-report.png', 240);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(40);

  // Roadmap Summary
  pdfService.drawHeading("8. Roadmap Summary",'left');
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/roadmap.png");
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText("The roadmap outlines key steps to address gaps, enhance AI capabilities, and ensure compliance with industry regulations.", 'left');
  pdfService.setCurrentY(20);

  // Roadmap for Mitigation of Control Gaps
  pdfService.drawHeading("9. Roadmap for Mitigation of Control Gaps",'left');
  pdfService.drawSubHeader("Short-term (0-6 months)",'left');
  pdfService.drawWrappedText("• Implement Data Governance Framework: Improve data quality and consistency.", 'left', 6);
  pdfService.drawWrappedText("• Enhance AI Training Programs: Upskill employees in AI and data science.", 'left', 6);
  pdfService.drawWrappedText("• Integrate AI with Legacy Systems: Develop strategies for seamless integration.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Medium-term (6-12 months)",'left');
  pdfService.drawWrappedText("• Develop Comprehensive AI Strategy: Align AI initiatives with business goals.", 'left', 6);
  pdfService.drawWrappedText("• Strengthen AI Governance: Establish robust governance frameworks.", 'left', 6);
  pdfService.drawWrappedText("• Increase AI Transparency: Implement tools for explainability and transparency.", 'left', 6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("Long-term (12+ months)",'left');
  pdfService.drawWrappedText("• Scale AI Infrastructure: Invest in scalable cloud solutions.", 'left', 6);
  pdfService.drawWrappedText("• Continuous Monitoring: Establish ongoing performance and risk monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Regulatory Compliance: Ensure all AI models comply with industry-specific regulations.", 'left', 6);
  pdfService.setCurrentY(10);

  // AI Adoption Strategy
  pdfService.drawHeading("10. AI Adoption Strategy",'left');
  pdfService.drawWrappedText("Crafting an effective AI adoption strategy is essential to bridge identified gaps and propel organizational advancement...", 'left', 6);
  pdfService.setCurrentY(10);

  // Remediation Progress
  pdfService.drawHeading("Remediation Progress",'left');
  pdfService.setCurrentY(3);
  // const remediationTable = [
  //   {
  //     row: ['Closed', '13'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(0, 0.5, 0),rgb(0, 0.5, 0)]
  //   },
  //   {
  //     row: ['Retest', '0'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0.55, 0),rgb(1, 0.55, 0)]
  //   },
  //   {
  //     row: ['Open', '32'],
  //     color: [rgb(0, 0, 0),rgb(0, 0, 0)],
  //     bgColor: [rgb(1, 0, 0),rgb(1, 0, 0)]
  //   }
  // ];
  
  await pdfService.addLocalImage('./assets/remediation-progress.png',240);
  
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText("• Closed - 13",'left',16);
  pdfService.drawWrappedText("• Retest - 0",'left',16);
  pdfService.drawWrappedText("• Open - 32",'left',16);

  // pdfService.renderTable(remediationTable, [100,100]);
  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(20);

  // TCO/ROI Analysis
  pdfService.drawHeading("TCO/ROI Analysis",'left');
  pdfService.drawSubHeader("Total Cost of Ownership (TCO)",'left',6);
  pdfService.drawWrappedText("• Initial Investment: $2 million for infrastructure and training.", 'left', 6);
  pdfService.drawWrappedText("• Operational Costs: $500,000 annually for maintenance and monitoring.", 'left', 6);
  pdfService.drawWrappedText("• Integration Costs: $1 million for system integration and upgrades.", 'left', 6);

  pdfService.drawSubHeader("Return on Investment (ROI)",'left');
  pdfService.drawWrappedText("• Efficiency Gains: $1.5 million annual savings from predictive maintenance.", 'left', 6);
  pdfService.drawWrappedText("• Revenue Growth: $2 million annual increase from AI-driven marketing.", 'left', 6);
  pdfService.drawWrappedText("• Cost Savings: $300,000 annual savings from automated customer service.", 'left', 6);
  pdfService.setCurrentY(20);

  // Summary
  // pdfService.setCurrentY(250);
  pdfService.drawHeading("Summary",'left');
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Risk Findings for Demand Prediction AI for Lumbar Supply Chain",'left');
  pdfService.setCurrentY(3);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Unscanned SBOM in Open-Source Libraries Leading to Vulnerabilities', 
        'The Software Bill of Materials (SBOM) for open-source libraries used in model deployments is not regularly scanned. This oversight can allow backdoor vulnerabilities within these libraries to go undetected, posing security risks to the supply chain system.', 
        'Potential exploitation of unpatched vulnerabilities, leading to data breaches, system downtime, and loss of stakeholder trust.', 
        'Implement regular vulnerability scanning of SBOMs using tools like OWASP Dependency-Check. Establish a process for continuous monitoring and updating of open-source components.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    {
      row: [
        '2', 
        'Licensing Issues with Reference Datasets Used for Model Training', 
        'The datasets used for training the model may have licensing restrictions that are not being adhered to, potentially violating legal agreements or intellectual property rights. This non-compliance can result in legal action against Lumabr and harm its reputation.', 
        'Legal penalties, financial fines, and reputational damage due to infringement of data usage agreements and intellectual property laws.', 
        'Conduct a thorough review of all dataset licenses. Ensure compliance by obtaining necessary permissions or replacing datasets with appropriately licensed alternatives.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120]);
  pdfService.setCurrentY(130);
  const tbData2 = [
    {
      row: [
        '3', 
        'Lack of Authorization Controls on S3 Storage for Training Data', 
        'The Amazon S3 storage used for training data lacks proper authorization controls. This vulnerability exposes the data to unauthorized access and potential data poisoning attacks, where malicious actors could alter the training data to compromise the model\'s integrity.', 
        'Unauthorized data manipulation, leading to compromised model performance, inaccurate forecasts, and potential financial and reputational losses.', 
        'Implement role-based access control (RBAC) on S3 storage. Use AWS Identity and Access Management (IAM) policies to restrict access and protect data integrity.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  },
  {
      row: [
        '4', 
        'Insufficient Data Encryption Exposing Sensitive Information', 
        'Training data and model outputs are not adequately encrypted during storage and transmission. This inadequacy increases the risk of data interception and unauthorized access, potentially leading to data breaches involving sensitive company and customer information.', 
        'Exposure of confidential data, resulting in compliance violations, legal consequences, and loss of customer and stakeholder trust.', 
        'Apply strong encryption methods for data at rest (e.g., AES-256 encryption) and in transit (e.g., TLS/SSL). Regularly audit encryption practices to ensure they meet current security standards.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
  }
  ];
  pdfService.renderTable(tbData2, [50, 110,110,110,120]);
  pdfService.setCurrentY(40);
  // pdfService.setCurrentY(3);
  // const summaryTable = [
  //   {
  //     row: ['Priority', 'Vulnerability','Status'],
  //     color: [rgb(1,1,1), rgb(1,1,1),rgb(1,1,1)],
  //     bgColor: [rgb(0,0,0.3), rgb(0,0,0.3), rgb(0,0,0.3)]

  //   },
  //   {
  //     row: ['Critical', 'Unrestricted Upload of File with Dangerous Type','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Inconsistent Access Control','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Relative Path Traversal' ,'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
    
  //   },
  //   { 
  //     row: ['HIGH', 'Reflected Cross Site Scripting', 'CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Blind SQL Injection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'Persistent Cross Site Scripting','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','Unsupported Web Server Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH','SSL Version 2 and 3 Protocol Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['HIGH', 'PHP Unsupported Version Detection','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,0,0), rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Weak Password Policy','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Session Fixation','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Ciphers','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM','Reflected Cross Site Scripting','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Cross Site Request Forgery (CSRF)','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Functionality Misuse','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];
  // pdfService.renderTable(summaryTable, [100, 180, 100]);
  // pdfService.setCurrentY(15);
  // const tableData2 = [
  //   {
  //     row: ['MEDIUM', 'No Account Lockout May Facilitate Brute Force Password Attack','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'Open Redirection','CLOSED'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Self-Signed Certificate','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate cannot be Trusted','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Medium Strength Cipher Suites Supported (SWEET32)','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Signed Using Weak Hashing Algorithm','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Weak Cipher Suites Supported','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['MEDIUM', 'SSL Certificate Expiry','OPEN'],
  //     color: [rgb(1,1,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Multiple Simultaneous User Sessions','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'HTML 5 Cross Origin Resource Sharing','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Missing X-XSS-Protection Header','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie Without HTTP Only Flag Set','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Strict Transport Security Policy Not Enforced','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Outdated Version of JQuery','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Cookie With Secure Flag Missing','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'User Enumeration','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Server Discloses Supporting Technology','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Framing Protection','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Insufficient Session Expiration','CLOSED'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(0,1,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'SSL RC4 Cipher Suites Supported (Bar Mitzvah)','OPEN'],
  //     color: [rgb(0,0,1), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(1,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'Inducing Account Lockout','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.1 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'nginx HTTP Server Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['LOW', 'TLS Version 1.0 Protocol Detection','OPEN'],
  //     color: [rgb(0,0,0), rgb(0,0,0), rgb(1,0,0)],
  //     bgColor: [rgb(0,1,0),rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];
  // pdfService.setCurrentY(80);
  // pdfService.renderTable(tableData2, [100, 180, 100]);
  // pdfService.drawWrappedText("This report evaluates AI adoption, identifying gaps and providing strategic recommendations for improvement...", 'left', 6);
  pdfService.setCurrentY(10);




  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=risk-assessment-report-chai.pdf"
  );
  res.send(Buffer.from(pdfBytes));
})


// app.get('/risk-assessment-balance', async (req, res) => {
//   await pdfService.init();

//   pdfService.setCurrentY(70);
//   const tbData2 = [
    
//   ];
//   pdfService.renderTable(tbData2, [50, 110,110,110,120]);
//   pdfService.setCurrentY(40);
  
  

//   const pdfBytes = await pdfService.generatePDF();

//   res.setHeader("Content-Type", "application/pdf");
//   res.setHeader(
//     "Content-Disposition",
//     "attachment; filename=risk-assessment-report.pdf"
//   );
//   res.send(Buffer.from(pdfBytes));
// })


app.get("/updated-one-usecase-report", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. High Level Architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Low Level Architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
    "left"
  );
  pdfService.setCurrentY(10);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(6);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  const tableData = [
    {
      row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
      bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    // {
    //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
    //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
    //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    // }
  ];

  pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(10);
  pdfService.drawSubHeader("ROI Graph By year:",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/graph-1.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap.png");
  pdfService.setCurrentY(15);
  
  pdfService.setCurrentY(190);

  pdfService.drawHeading("6. High Level Architecture", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(175);


  pdfService.drawHeading("7. Low Level Architecture",'left');
  pdfService.setCurrentY(3);
  
  pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  pdfService.setCurrYTop(260);
  pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("3. Maturity level 2","left",15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  pdfService.setCurrYTop(320);
  pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, the targeted user groups include approximately 120-150 professionals involved in planning and decision-making processes. The identified users are:",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Sales Operations Teams: ~50 users leveraging the tool to predict sales trends, identify seasonal demand variations, and align inventory planning with forecasted demand.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Inventory Managers: ~40 users utilizing forecasts to maintain optimal stock levels, minimizing both overstock and stockout scenarios.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Supply Chain Managers: ~30 users responsible for monitoring the overall supply chain performance and identifying bottlenecks, which can be addressed by optimizing inventory levels or improving supply chain processes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~30 users using forecast data to plan campaigns, align promotions, and optimize resource allocation for demand spikes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from actionable insights and automated forecasting models, reducing manual intervention while maintaining accuracy through human-in-the-loop (HITL) processes.",
    "left",15
  );
  pdfService.setCurrentY(10);


  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, deployment will initially focus on regions with the highest operational impact and potential benefits.",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States and Canada, focusing on key operational hubs and warehouses.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In later phases, the tool may expand to European and Asian markets, particularly regions with complex demand cycles and high variability.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: Forecasting models and data analysis tools will adhere to regional regulations, including GDPR (for Europe) and CCPA (for the U.S.).",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: Incorporates regional demand trends, seasonality factors, and market-specific variables to ensure precise and actionable forecasts.",
    "left",25
  );
  pdfService.setCurrentY(10);



  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Demand Forecasting Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Data Accuracy Risk: Errors in historical sales or inventory data could lead to inaccurate demand forecasts, impacting supply chain decisions.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive trust in AI-generated forecasts without human oversight could result in strategic missteps, especially during unexpected market disruptions or external factors.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Compliance and Privacy Risk: Sensitive customer or sales data used in forecasting models must comply with data privacy laws, such as GDPR (EU) or CCPA (U.S.). Non-compliance may result in legal and reputational damage.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Scalability Challenges: Expanding the tool to global operations could expose performance limitations or regional biases in the forecasting model.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Bias in Forecasting Models: Historical biases in data could skew predictions, leading to inaccurate forecasts for specific regions, product categories, or demographic groups.",
    "left",
    25
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Implement robust data validation and cleaning processes to ensure the accuracy of input data.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Enforce a Human-in-the-Loop (HITL) process to review AI-generated forecasts before operational decisions are made.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Adhere to industry best practices and legal requirements for data privacy and security.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct regular audits of the forecasting model to identify and correct biases.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Design the system with scalability and adaptability in mind to support future expansions.",
    "left",
    25
  );




  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the anticipated financial benefits and strategic implications of investing in an AI-powered automation system for customer service. The project promises significant long-term ROI, aligning with organizational goals to enhance efficiency and customer satisfaction.",
    "left"
  );

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/usecase-prioritization-updated-report", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "The Demand Forecasting solution leverages advanced AI and machine learning models to predict future demand patterns for products or services in real-time, specifically tailored for businesses within the supply chain and retail sectors. This tool analyzes historical sales data, market trends, and external factors such as seasonality, promotions, and economic conditions to generate accurate forecasts. By using these predictions, businesses can optimize inventory levels, reduce stockouts or overstocking, improve procurement strategies, and enhance overall supply chain efficiency."
    , 'left'
  );
  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Launch Announcement','Introduction of an AI-powered platform offering a comprehensive suite of services tailored to demand forecasting for building materials in the supply chain.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Product Launch','We are launching the Demand Forecasting AI Platform, a suite of AI-powered tools for supply chain professionals to help predict demand, optimize inventory, and identify the most suitable next actions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Purpose' , 'Utilize generative AI and predictive analytics to provide demand forecasts, inventory optimization, and actionable insights for professionals across the supply chain lifecycle.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Talent Amplification','Empower employees with AI-driven tools to enhance decision-making, streamline processes, and deliver increased value across procurement, inventory, and distribution functions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]    
    },
    {
      row: ['Key Customer Benefits','Improved Forecast Accuracy, Operational Efficiency,Increased productivity'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)] 
    },
    {
      row: ['Human In the Loop','Designed as assistive tools to augment professionals roles. These tools highlight operational opportunities and risks, improve productivity, and enable dynamic decision-making using real-time and historical data.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Intended Audience','Intended for internal stakeholders in the supply chain. The tools assist employees and teams without direct customer-facing functionalities.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Limitations of Offering',
        'Direct customer or external stakeholder access is not supported, Specific high-risk use cases require additional review and validation to ensure compliance.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Role Complexity','Addresses the complexities of supply chain management, including demand variability, diverse product lines, and distribution challenges. It helps navigate vast datasets and tailor responses to unique market demands.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Customer Challenges','Professionals face challenges in accurately predicting demand due to: Seasonal variability and regional differences, A wide range of building materials with differing demand cycles, Inefficiencies caused by siloed data across systems and stakeholders.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Identifying Customer Needs','Feedback from teams and stakeholders identified a need for centralized data access, tools to automate demand forecasting, and actionable insights for inventory and procurement planning.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Data Challenges','Data is often fragmented across internal systems (e.g., sales records, procurement logs, warehouse data) and external sources (e.g., housing market trends, weather data), making timely and accurate forecasting difficult.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Future Tools','Proposed tools to further enhance supply chain processes: Analyze supplier performance and optimize contracts.Logistics Copilot: Optimize distribution routes and schedules. Real-time inventory tracking and replenishment suggestions. Predict material demand shifts based on housing market trends.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Non Functional Requirements','High Availability, Secure and scalable infrastructure, Regular updates for data and content, Easy-to-use interface with minimal training requirements.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  const tableData = [
    {
      row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
      bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    {
      row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
      color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
      bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    },
    // {
    //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
    //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
    //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
    // }
  ];

  pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(18);
  pdfService.drawSubHeader("ROI Graph By year:",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/graph-1.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap.png");
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(10);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);
  
  pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  pdfService.setCurrYTop(260);
  pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("3. Maturity level 2","left",15);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  pdfService.setCurrYTop(320);
  pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, the targeted user groups include approximately 120-150 professionals involved in planning and decision-making processes. The identified users are:",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Sales Operations Teams: ~50 users leveraging the tool to predict sales trends, identify seasonal demand variations, and align inventory planning with forecasted demand.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Inventory Managers: ~40 users utilizing forecasts to maintain optimal stock levels, minimizing both overstock and stockout scenarios.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Supply Chain Managers: ~30 users responsible for monitoring the overall supply chain performance and identifying bottlenecks, which can be addressed by optimizing inventory levels or improving supply chain processes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~30 users using forecast data to plan campaigns, align promotions, and optimize resource allocation for demand spikes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from actionable insights and automated forecasting models, reducing manual intervention while maintaining accuracy through human-in-the-loop (HITL) processes.",
    "left",15
  );
  pdfService.setCurrentY(10);


  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, deployment will initially focus on regions with the highest operational impact and potential benefits.",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States and Canada, focusing on key operational hubs and warehouses.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In later phases, the tool may expand to European and Asian markets, particularly regions with complex demand cycles and high variability.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: Forecasting models and data analysis tools will adhere to regional regulations, including GDPR (for Europe) and CCPA (for the U.S.).",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: Incorporates regional demand trends, seasonality factors, and market-specific variables to ensure precise and actionable forecasts.",
    "left",25
  );
  pdfService.setCurrentY(10);



  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Demand Forecasting Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Data Accuracy Risk: Errors in historical sales or inventory data could lead to inaccurate demand forecasts, impacting supply chain decisions.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive trust in AI-generated forecasts without human oversight could result in strategic missteps, especially during unexpected market disruptions or external factors.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Compliance and Privacy Risk: Sensitive customer or sales data used in forecasting models must comply with data privacy laws, such as GDPR (EU) or CCPA (U.S.). Non-compliance may result in legal and reputational damage.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Scalability Challenges: Expanding the tool to global operations could expose performance limitations or regional biases in the forecasting model.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Bias in Forecasting Models: Historical biases in data could skew predictions, leading to inaccurate forecasts for specific regions, product categories, or demographic groups.",
    "left",
    25
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Implement robust data validation and cleaning processes to ensure the accuracy of input data.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Enforce a Human-in-the-Loop (HITL) process to review AI-generated forecasts before operational decisions are made.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Adhere to industry best practices and legal requirements for data privacy and security.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct regular audits of the forecasting model to identify and correct biases.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Design the system with scalability and adaptability in mind to support future expansions.",
    "left",
    25
  );




  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the anticipated financial benefits and strategic implications of investing in an AI-powered automation system for customer service. The project promises significant long-term ROI, aligning with organizational goals to enhance efficiency and customer satisfaction.",
    "left"
  );

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/updated-model-card-report", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Model Overview','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Details','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Technical Details','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Compliance and Governance','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Recommendations and Next Steps','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '7'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','9'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The Demand Forecasting Model is designed to predict future product demand, enabling businesses to optimize inventory levels and avoid situations of overstocking or stockouts. By leveraging historical sales data and external factors such as seasonal trends and promotions, the model supports effective supply chain management and decision-making processes.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. Model Overview", "left");
  pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  const tableDataRep = [
    {
      row: ['Model Name','Demand Forecasting Model'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Department','Planning and Forecasting'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Frequency of Use', 'Daily'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableDataRep, [175, 300]);
  pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("3. Model Details", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Model Input",'left',6);
  const modelInputs = [
    {
      row: ['yearmonth','year','month','location','sales(in $)','qty'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    // {
    //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
    //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
    //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
    //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    // },
    // {
    //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
    //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
    //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

    //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    // },
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  pdfService.setCurrentY(20);

  pdfService.drawSubHeader("Model Output",'left',6);
  
  const tableOutputData = [
    {
      row: ['Output Field','Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
    },
    {
      row: ['unique_id',	'Anonymized identifier for location and SKU'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
    },
    {
      row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['location',	'Anonymized location identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['sku',	'Anonymized SKU identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['division',	'Division'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['region',	'Region'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg1',	'Product hierarchy level 1'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg2',	'Product hierarchy level 2'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg3',	'Product hierarchy level 3'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['predicted_quantity',	'Predicted quantity for the given month'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

      // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    }
  ];

  pdfService.renderTable(tableOutputData, [150,300]);
  pdfService.setCurrentY(10);

  await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  pdfService.setCurrentY(15);

  pdfService.setCurrentY(20);
  pdfService.drawSubHeader('Model Paramaeters','left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  pdfService.drawWrappedText("• Market Trends",'left',16);
  pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  pdfService.drawWrappedText("• Promotions",'left',16);
  pdfService.drawWrappedText("• Economic Indicators",'left',16);
  pdfService.drawWrappedText(
    "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Model Purpose: Provide accurate demand predictions for planning decisions",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  pdfService.drawWrappedText('• Features Engineered:','left',30);
  pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  pdfService.drawWrappedText('• Trend Components','left',45);
  pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. Technical Details", "left");
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Model Link: ",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
    "left",
    6,
  );
  // pdfService.drawWrappedText(
  //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  //   "left",
  //   6
  // );
  // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // const linkY = pdfService.currentY;
  // const linkAnnotation = {
  //   Type: 'Annot',
  //   Subtype: 'Link',
  //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  //   Border: [0, 0, 0], // Optional border
  //   A: {
  //     Type: 'Action',
  //     S: 'URI',
  //     URI: 'https://www.openai.com', // Your desired link
  //   },
  // };
  // const fontSize = 12;
  // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // Measure text width
  // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // Draw the text
  // const x = 50; // Starting x-coordinate
  // const y = 300; // Starting y-coordinate
  // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  //   x: x,
  //   y: y,
  //   size: fontSize,
  //   font: pdfService.font,
  //   color: rgb(0, 0, 0),
  // });
  pdfService.drawWrappedText(
    "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/dummy-3.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-4.png',120,0.4, 300);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('1. Demand Prediction','left',15);
  pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('2. Forecast Variability','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('3. Error Metrics','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The model adheres to Fusefy's AI governance standards and is designed to comply with industry-specific regulations. Responsible AI practices ensure the model's output aligns with ethical guidelines. Regular evaluations are performed to validate the model's reliability and accuracy.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance model accuracy by incorporating additional variables such as macroeconomic indicators.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Integrate model output with inventory management systems for real-time decision-making.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Monitor accuracy continuously and make model adjustments based on changing demand patterns.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Extend forecasting capabilities to consider seasonal and regional demand variations.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for GenAI App Used by Lumbar Supply Chain Managers','left',6);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Inadequate Prompt Engineering Leading to AI Hallucinations', 
        'The GenAI app lacks sufficient prompt engineering, causing the AI to generate hallucinations — incorrect or nonsensical responses.', 
        'Misleading information can lead to poor decision-making, operational inefficiencies, and loss of trust among supply chain managers.', 
        'Implement advanced prompt engineering techniques such as few-shot learning or integrate frameworks like LangChain to dynamically adjust inputs and improve response accuracy.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    {
      row: [
        '2', 
        'Data Quality Issues with Documents Indexed by the RAG', 
        'The documents indexed by the Retrieval-Augmented Generation (RAG) system contain data quality issues, including outdated information, inaccuracies, and inconsistencies.', 
        'Poor data quality leads to unreliable AI outputs, affecting supply chain planning and potentially causing financial losses.',
        'Conduct a thorough data audit to clean and update the indexed documents. Implement data validation protocols to maintain high-quality inputs for the RAG system.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
        
        row: [
          '3', 
          'Lack of Citations for Referenced Documents', 
          'The GenAI app does not provide citations or references for the documents it uses to generate responses. This lack of transparency makes it difficult for users to verify the accuracy and source of the information provided.', 
          'Reduced user confidence in the AI outputs, potential propagation of misinformation, and compliance issues with intellectual property rights.',
          'Enhance the GenAI app to include citations and references for all sourced documents. This can be achieved by modifying the RAG pipeline to retain and display source metadata.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '4', 
        'Underperforming SQL Agentic Tool Affecting Query Efficiency', 
        'The SQL agentic tool integrated with the LLM is not fine-tuned, resulting in suboptimal SQL queries. This inefficiency affects the performance of data retrieval and may slow down the AI response time.', 
        'Delayed or inefficient data retrieval can hinder real-time decision-making and reduce the overall efficiency of supply chain operations.',
        'Fine-tune the SQL agentic tool within the LLM to optimize query generation. Implement performance monitoring to continuously assess and improve query efficiency.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
    
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/updated-updated-model-card-report-demand-forecasting", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. AI Bill of Materials(AI-BOM)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Compliance and Governance','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Recommendations and Next Steps','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The Demand Forecasting Model is designed to predict future product demand, enabling businesses to optimize inventory levels and avoid situations of overstocking or stockouts. By leveraging historical sales data and external factors such as seasonal trends and promotions, the model supports effective supply chain management and decision-making processes.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. AI Bill Of Materials(AI-BOM)",'left');
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("i. Model Details","left",6);
  pdfService.setCurrentY(3);

  const tableDataAIBOM1 = [
    {
      row : ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Name', 'Demand Forecasting Model'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Department','Planning and Forecasting'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Version', '1.0'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Type', 'Regression'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Licenses', 'Apache 2.0'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Libraries', 'TensorFlow 2.11, scikit-learn 1.2.1, Pandas 2.0.1, NumPy 1.23.5'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row : ['AI platform and services','Cloud services - AWS sagemaker, Azure ML, OpenAI API'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Frequency of Use', 'Daily'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Documentation', 'https://github.com/datapredict/demand-forecasting/wiki'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Generated By','DataPredict Automated Pipeline'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Contact','ai.support@datapredict.com'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  pdfService.renderTable(tableDataAIBOM1, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("ii. Model Architecture",'left',6);
  pdfService.setCurrentY(3);

  const modelArchDetails = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Architecture','Transformer-based Time Series Model'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Architecture Family','ForecastNet'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Input', 'Historical sales data (CSV, JSON), Inventory levels (CSV, API inputs)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Output', ' Sales forecasts (CSV, JSON), Inventory recommendations (JSON)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Hardware','NVIDIA A100 GPU'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software','Dockerized application with Python runtime'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software Required for Execution','True'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  pdfService.renderTable(modelArchDetails, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("iii. Model Input",'left',6);
  const modelInputs = [
    {
      row: ['yearmonth','year','month','location','sales(in $)','qty'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],   
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
   
    },
    {
      row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'], 
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  pdfService.setCurrentY(20);

  pdfService.drawSubHeader("iv. Model Output",'left',6);
  
  const tableOutputData = [
    {
      row: ['Output Field','Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
    },
    {
      row: ['unique_id',	'Anonymized identifier for location and SKU'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
    },
    {
      row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['location',	'Anonymized location identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['sku',	'Anonymized SKU identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['division',	'Division'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['region',	'Region'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['pg1',	'Product hierarchy level 1'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['pg2',	'Product hierarchy level 2'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['pg3',	'Product hierarchy level 3'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['predicted_quantity',	'Predicted quantity for the given month'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
    }
  ];

  pdfService.renderTable(tableOutputData, [150,300]);
  pdfService.setCurrentY(25);
  await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  pdfService.setCurrentY(15);
  // pdfService.setCurrentY(25);


  
  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);

  pdfService.drawSubHeader("v. Datasets",'left',6);
  pdfService.setCurrentY(3);
  
  const datasetInfo = [
    {
      row: ['Name','Source','Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Retail Sales Data (Public Dataset)','https://datahub.io/core/retail-sales','Historical sales trends for training'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Proprietary Inventory Data','Internal Dataset (Confidential)','Inventory optimization training'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  pdfService.renderTable(datasetInfo, [140, 190, 140]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("vi. Usage",'left',6);
  pdfService.setCurrentY(3);

  const usageDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Intended Use','Predicting future sales demand for retail and inventory optimization and assist decision-making in supply chain and inventory management.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Out of Scope Usage','Real-time stock trading predictions and analyse industries outside retail or manufacturing.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Misuse or Malicious Use','Usage for discriminatory or unethical forecasting practices and incorporate into unvetted applications without validation'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  pdfService.renderTable(usageDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("vii. Considerations",'left',6);
  pdfService.setCurrentY(3);

  const considerationDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Environmental Impact','Model training carbon footprint: ~50 kg CO2'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Ethical Considerations','Potential biases in sales data due to demographic preferences.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  pdfService.renderTable(considerationDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Department','Planning and Forecasting'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Frequency of Use', 'Daily'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("3. Model Details", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawSubHeader("Model Input",'left',6);
  // const modelInputs = [
  //   {
  //     row: ['yearmonth','year','month','location','sales(in $)','qty'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   // {
  //   //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  //   // {
  //   //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("Model Output",'left',6);
  
  // const tableOutputData = [
  //   {
  //     row: ['Output Field','Description'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
  //   },
  //   {
  //     row: ['unique_id',	'Anonymized identifier for location and SKU'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   },
  //   {
  //     row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['location',	'Anonymized location identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['sku',	'Anonymized SKU identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['division',	'Division'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['region',	'Region'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg1',	'Product hierarchy level 1'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg2',	'Product hierarchy level 2'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg3',	'Product hierarchy level 3'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['predicted_quantity',	'Predicted quantity for the given month'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   }
  // ];

  // pdfService.renderTable(tableOutputData, [150,300]);
  // pdfService.setCurrentY(10);

  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);

  // pdfService.setCurrentY(20);
  // pdfService.drawSubHeader('Model Paramaeters','left',6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  // pdfService.drawWrappedText("• Market Trends",'left',16);
  // pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  // pdfService.drawWrappedText("• Promotions",'left',16);
  // pdfService.drawWrappedText("• Economic Indicators",'left',16);
  // pdfService.drawWrappedText(
  //   "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Purpose: Provide accurate demand predictions for planning decisions",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  // pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  // pdfService.drawWrappedText('• Features Engineered:','left',30);
  // pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  // pdfService.drawWrappedText('• Trend Components','left',45);
  // pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  // pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  // pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  // pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  // pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("4. Technical Details", "left");
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Model Link: ",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
  //   "left",
  //   6,
  // );
  // // pdfService.drawWrappedText(
  // //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  // //   "left",
  // //   6
  // // );
  // // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // // const linkY = pdfService.currentY;
  // // const linkAnnotation = {
  // //   Type: 'Annot',
  // //   Subtype: 'Link',
  // //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  // //   Border: [0, 0, 0], // Optional border
  // //   A: {
  // //     Type: 'Action',
  // //     S: 'URI',
  // //     URI: 'https://www.openai.com', // Your desired link
  // //   },
  // // };
  // // const fontSize = 12;
  // // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // // Measure text width
  // // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // // Draw the text
  // // const x = 50; // Starting x-coordinate
  // // const y = 300; // Starting y-coordinate
  // // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  // //   x: x,
  // //   y: y,
  // //   size: fontSize,
  // //   font: pdfService.font,
  // //   color: rgb(0, 0, 0),
  // // });
  // pdfService.drawWrappedText(
  //   "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/dummy-3.png',120,0.4);
  pdfService.setCurrYTop(120);
  await pdfService.addLocalImage('./assets/dummy-4.png',120,0.4, 300);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('1. Demand Prediction','left',15);
  pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('2. Forecast Variability','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('3. Error Metrics','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The model adheres to Fusefy's AI governance standards and is designed to comply with industry-specific regulations. Responsible AI practices ensure the model's output aligns with ethical guidelines. Regular evaluations are performed to validate the model's reliability and accuracy.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance model accuracy by incorporating additional variables such as macroeconomic indicators.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Integrate model output with inventory management systems for real-time decision-making.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Monitor accuracy continuously and make model adjustments based on changing demand patterns.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Extend forecasting capabilities to consider seasonal and regional demand variations.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for GenAI App Used by Lumbar Supply Chain Managers','left',6);
  const tableData = [
    {
      row: ['No', 'Finding Title','Description','Impact', 'Recommendation'],
      color: [rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1), rgb(1,1,1)],
      bgColor: [rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5), rgb(0,0,0.5)]
    },
    {
      row: [
        '1', 
        'Inadequate Prompt Engineering Leading to AI Hallucinations', 
        'The GenAI app lacks sufficient prompt engineering, causing the AI to generate hallucinations — incorrect or nonsensical responses.', 
        'Misleading information can lead to poor decision-making, operational inefficiencies, and loss of trust among supply chain managers.', 
        'Implement advanced prompt engineering techniques such as few-shot learning or integrate frameworks like LangChain to dynamically adjust inputs and improve response accuracy.'
      ],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),rgb(1,1,1),]
    },
    {
      row: [
        '2', 
        'Data Quality Issues with Documents Indexed by the RAG', 
        'The documents indexed by the Retrieval-Augmented Generation (RAG) system contain data quality issues, including outdated information, inaccuracies, and inconsistencies.', 
        'Poor data quality leads to unreliable AI outputs, affecting supply chain planning and potentially causing financial losses.',
        'Conduct a thorough data audit to clean and update the indexed documents. Implement data validation protocols to maintain high-quality inputs for the RAG system.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
        
        row: [
          '3', 
          'Lack of Citations for Referenced Documents', 
          'The GenAI app does not provide citations or references for the documents it uses to generate responses. This lack of transparency makes it difficult for users to verify the accuracy and source of the information provided.', 
          'Reduced user confidence in the AI outputs, potential propagation of misinformation, and compliance issues with intellectual property rights.',
          'Enhance the GenAI app to include citations and references for all sourced documents. This can be achieved by modifying the RAG pipeline to retain and display source metadata.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '4', 
        'Underperforming SQL Agentic Tool Affecting Query Efficiency', 
        'The SQL agentic tool integrated with the LLM is not fine-tuned, resulting in suboptimal SQL queries. This inefficiency affects the performance of data retrieval and may slow down the AI response time.', 
        'Delayed or inefficient data retrieval can hinder real-time decision-making and reduce the overall efficiency of supply chain operations.',
        'Fine-tune the SQL agentic tool within the LLM to optimize query generation. Implement performance monitoring to continuously assess and improve query efficiency.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
    
  ];

  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/updated-updated-model-card-report-codeassist-gpt", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. AI Bill of Materials(AI-BOM)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Compliance and Governance','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Recommendations and Next Steps','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "CodeAssist GPT is a transformative generative AI solution tailored for software development, designed to convert natural language descriptions of functionality into precise code snippets. Powered by OpenAI's GPT-4, the model is integral to daily operations, streamlining the coding process and enhancing developer efficiency. Its ability to generate accurate, language-specific code aligns with key development activities, reducing time-to-delivery and mitigating manual effort. By leveraging advanced transformer methodologies, CodeAssist GPT ensures consistency, scalability, and innovation in software engineering, making it a high-priority use case for organizations aiming to optimize their development lifecycle.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. AI Bill Of Materials(AI-BOM)",'left');
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("i. Model Details","left",6);
  pdfService.setCurrentY(3);

  const tableDataAIBOM1 = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Name', 'CodeAssist GPT'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Usage', 'Transform natural language descriptions into accurate and functional code snippets'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Department', 'Software Development'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Platform', 'GenAI Platforms (OpenAI)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Version', '1.0'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Type', 'Generative AI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Licenses', 'OpenAI API Usage License'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Libraries', 'OpenAI GPT-4 API, LangChain, Python SDKs'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['AI Platform and Services', 'OpenAI API, Cloud services - AWS Lambda, Azure Functions'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Homogeneity', 'Grouping customers with similar characteristics, behaviors, or purchasing patterns for targeted recommendations'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Product Affinity', 'Analyzing relationships between products to recommend frequently associated or complementary items'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },    
    {
      row: ['Frequency of Use', 'Daily'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Incorrect code snippets may lead to bugs, inefficiencies, or security vulnerabilities)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    // {
    //   row: ['Documentation', 'https://github.com/codeassist/gpt/wiki'],
    //   color: [rgb(0, 0, 0), rgb(0, 0, 0)],
    //   bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    // },
    // {
    //   row: ['Generated By', 'CodeAssist Development Team'],
    //   color: [rgb(0, 0, 0), rgb(0, 0, 0)],
    //   bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    // },
    // {
    //   row: ['Contact', 'ai.support@codeassist.com'],
    //   color: [rgb(0, 0, 0), rgb(0, 0, 0)],
    //   bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    // }
  ];
  
  pdfService.renderTable(tableDataAIBOM1, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("ii. Model Architecture",'left',6);
  pdfService.setCurrentY(3);

  const modelArchDetails = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Architecture', 'Transformer-based Language Model'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Architecture Family', 'GPT (Generative Pre-trained Transformer)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Input', 'Natural language prompts (JSON, API calls)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Output', 'Code snippets, explanations, and debugging suggestions (JSON, API responses)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Hardware', 'NVIDIA A100 GPU for training; CPU/GPU for inference'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software', 'Dockerized application with Python runtime'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software Required for Execution', 'True'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  pdfService.renderTable(modelArchDetails, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("iii. Pre-processed Model Input",'left',6);
  const preProcessedModelInput = [
    {
      row: ['Region Name','Document Date','Product Group Level-1','Product Group Level-2','Total sales(in $)','Phase'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['West', '11-07-2023', 'Lumber', 'Lumber-Dimensional', '$ 2462.35', 'Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['West', '01-10-2024', 'Lumber', 'Lumber-Dimensional', '$ 2509.31', 'Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['West', '26-03-2024', 'Lumber', 'Lumber-Dimensional', '$ 1204.00', 'Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['West', '27-02-2023', 'Lumber', 'Lumber-Dimensional', '$ 492.53', 'Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['Northeast', '07-12-2023', 'Millwork', 'Millwork-Doors', '$ 0.0', 'Interior Finish'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(preProcessedModelInput, [70,80,60,120,80,80]);
  pdfService.setCurrentY(20);

  pdfService.drawSubHeader("iv. Clustered Model Input",'left',6);
  const clusteredModelInput = [
    {
      row: ['Region Name','Total Sales(in $)','Average Monthly Orders Qty','Unique Jobs','Days since Last Purchase','Purchase Interval','Phase'],
      color: [rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['South Central', '18291.57', '6.16', '1', '56', '6.4','Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['Midwest', '972513.25', '31.17', '175', '46', '2.04','Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['Midwest', '26989426.46', '604.08', '64', '46', '1.40','Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['Southeast', '28480921.12', '895', '3598', '46', '1.44','Structural Frame'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['Southeast', '306781.57', '8.14', '13', '46', '1794.04','Interior Finish'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(clusteredModelInput, [70,80,70,70,70,70,70]);
  pdfService.setCurrentY(20);

  pdfService.drawSubHeader("v. Model Output",'left',6);
  
  const clusteredModelOutput = [
    {
      row: ['Region Name','Cluster ID','Antecedent','Consequent','Rec Confidence','Rec Leverage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners- Anchors', '0.5101', '1.5653'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners-Nuts, Bolts, & Washers', '0.4409', '1.3252'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts, & Washers', '0.5014', '1.4863'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['South East', '1', 'Hardware-Connectors', 'Fasteners- Anchors', '0.4738', '1.4753'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    {
      row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts and Washers', '0.4185', '1.2742'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
    },
    
  ];
  pdfService.setCurrentY(3);
  pdfService.renderTable(clusteredModelOutput, [70,60,140,90,70,70]);
  pdfService.setCurrentY(20);
  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);
  // pdfService.setCurrentY(25);


  
  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);

  pdfService.drawSubHeader("vi. Software",'left',6);
  pdfService.setCurrentY(3);
  
  const softwareInfo = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Recommendation System Integration', 'Snowflake & Matillion', 'End-to-end recommendation codes are integrated into Snowflake and triggered via Matillion pipeline.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Retail Sales Data (Public Dataset)', 'https://datahub.io/core/retail-sales', 'Historical sales trends for training'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Proprietary Inventory Data', 'Internal Dataset (Confidential)', 'Inventory optimization training'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  pdfService.renderTable(softwareInfo, [140, 190, 140]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("vii. Usage",'left',6);
  pdfService.setCurrentY(3);

  const usageDatatable = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['CodeAssist GPT Integration', 'Snowflake, Matillion, GPT Models', 'CodeAssist GPT automates and optimizes recommendation codes in Snowflake, triggered by a Matillion pipeline for enhanced decision-making.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Retail Sales Data (Public Dataset)', 'https://datahub.io/core/retail-sales', 'Historical sales trends used for training recommendations'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Proprietary Inventory Data', 'Internal Dataset (Confidential)', 'Inventory optimization model training'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  pdfService.renderTable(usageDatatable, [150, 150,150]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("viii. Considerations",'left',6);
  pdfService.setCurrentY(3);

  const considerationDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Environmental Impact', 'Model training carbon footprint: ~50 kg CO2 from processing data across Snowflake and Matillion pipelines.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Ethical Considerations', 'Potential biases in training data, particularly in retail sales and inventory datasets, affecting recommendation quality.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Data Security', 'Sensitive proprietary data (like inventory and sales data) needs to be secured during integration and processing through Snowflake.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['System Scalability', 'Ensuring Snowflake and Matillion pipelines scale efficiently to process large datasets while integrating GPT models.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Explainability', 'Ensuring transparency in GPT model recommendations, especially for decision-makers in the business.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  pdfService.renderTable(considerationDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Department','Planning and Forecasting'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Frequency of Use', 'Daily'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("3. Model Details", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawSubHeader("Model Input",'left',6);
  // const modelInputs = [
  //   {
  //     row: ['yearmonth','year','month','location','sales(in $)','qty'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   // {
  //   //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  //   // {
  //   //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("Model Output",'left',6);
  
  // const tableOutputData = [
  //   {
  //     row: ['Output Field','Description'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
  //   },
  //   {
  //     row: ['unique_id',	'Anonymized identifier for location and SKU'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   },
  //   {
  //     row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['location',	'Anonymized location identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['sku',	'Anonymized SKU identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['division',	'Division'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['region',	'Region'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg1',	'Product hierarchy level 1'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg2',	'Product hierarchy level 2'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg3',	'Product hierarchy level 3'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['predicted_quantity',	'Predicted quantity for the given month'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   }
  // ];

  // pdfService.renderTable(tableOutputData, [150,300]);
  // pdfService.setCurrentY(10);

  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);

  // pdfService.setCurrentY(20);
  // pdfService.drawSubHeader('Model Paramaeters','left',6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  // pdfService.drawWrappedText("• Market Trends",'left',16);
  // pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  // pdfService.drawWrappedText("• Promotions",'left',16);
  // pdfService.drawWrappedText("• Economic Indicators",'left',16);
  // pdfService.drawWrappedText(
  //   "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Purpose: Provide accurate demand predictions for planning decisions",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  // pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  // pdfService.drawWrappedText('• Features Engineered:','left',30);
  // pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  // pdfService.drawWrappedText('• Trend Components','left',45);
  // pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  // pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  // pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  // pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  // pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("4. Technical Details", "left");
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Model Link: ",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
  //   "left",
  //   6,
  // );
  // // pdfService.drawWrappedText(
  // //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  // //   "left",
  // //   6
  // // );
  // // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // // const linkY = pdfService.currentY;
  // // const linkAnnotation = {
  // //   Type: 'Annot',
  // //   Subtype: 'Link',
  // //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  // //   Border: [0, 0, 0], // Optional border
  // //   A: {
  // //     Type: 'Action',
  // //     S: 'URI',
  // //     URI: 'https://www.openai.com', // Your desired link
  // //   },
  // // };
  // // const fontSize = 12;
  // // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // // Measure text width
  // // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // // Draw the text
  // // const x = 50; // Starting x-coordinate
  // // const y = 300; // Starting y-coordinate
  // // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  // //   x: x,
  // //   y: y,
  // //   size: fontSize,
  // //   font: pdfService.font,
  // //   color: rgb(0, 0, 0),
  // // });
  // pdfService.drawWrappedText(
  //   "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  // await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  // pdfService.setCurrYTop(120);
  // await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  // pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/graph--1.png',160,0.5);
  pdfService.setCurrYTop(160);
  await pdfService.addLocalImage('./assets/graph--2.png',160,0.5, 300);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/graph--3.png',160,0.6, 180);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Noticing Figure-1, As accuracy increases, response time also increases. This highlights the challenge of optimizing models to deliver both fast responses and high accuracy. Balancing these factors is key to ensuring a seamless user experience.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• In the Figure-2, A steady increase in both user satisfaction and positive feedback indicates that the model is improving and aligning well with user expectations. These metrics suggest that the changes made to the model over time have been effective in enhancing the user experience.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Comparing Figure-3, The data here suggests that growth in users (from 50 to 180) is positively influencing revenue. However, it’s essential to understand whether the increase in revenue is directly proportional to the number of users or if other factors (such as pricing changes or upsell strategies) have contributed.",'left',6);
  pdfService.setCurrentY(3);
  // pdfService.drawSubHeader('1. Demand Prediction','left',15);
  // pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('2. Forecast Variability','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Error Metrics','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  // pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The model adheres to Fusefy's AI governance standards and is designed to comply with industry-specific regulations. Responsible AI practices ensure the model's output aligns with ethical guidelines. Regular evaluations are performed to validate the model's reliability and accuracy.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance CodeAssist GPT's ability to understand domain-specific coding languages by incorporating additional programming languages and frameworks.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Integrate CodeAssist GPT with popular version control systems (e.g., GitHub, GitLab) for seamless code collaboration and version management.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Continuously update the training dataset to include more real-world code snippets and common developer queries to improve model accuracy and relevance.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Extend the code suggestion capabilities to cover a broader range of programming tasks, such as debugging, refactoring, and optimizing existing code.",
    "left",
    6
  );
  pdfService.setCurrentY(20);


  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for CodeAssist GPT Used by Developers','left',6);

  const tableData = [
      {
        row: ['No', 'Finding Title', 'Description', 'Impact', 'Recommendation'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
      },
      {
        row: [
          '1', 
          'Inadequate Understanding of Domain-Specific Code', 
          'CodeAssist GPT struggles with domain-specific languages or specialized coding frameworks, often leading to incorrect or inefficient code suggestions.',
          'Inaccurate or inefficient code suggestions can delay development, introduce bugs, and affect code maintainability.',
          'Enhance training with domain-specific datasets and fine-tune the model for particular programming languages and frameworks to improve code accuracy.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '2', 
          'Lack of Contextual Understanding in Code Refactoring', 
          'CodeAssist GPT struggles with maintaining the full context of a codebase during refactoring, potentially suggesting changes that conflict with existing structures.',
          'Ineffective refactoring may lead to broken functionality, inconsistencies, and additional debugging work for developers.',
          'Improve the model’s ability to analyze and preserve the full code context, especially for refactoring tasks, by integrating better context tracking mechanisms.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '3', 
          'Inability to Optimize Code for Performance', 
          'CodeAssist GPT may provide suggestions that do not optimize code for performance, such as inefficient algorithms or memory-heavy operations.',
          'Suboptimal code performance can lead to slow execution times, increased costs, and reduced system scalability.',
          'Implement performance-aware training for the model to suggest optimized algorithms and code structures that adhere to best practices for scalability and performance.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '4', 
          'Over-reliance on External Libraries Without Proper Vetting', 
          'CodeAssist GPT may suggest third-party libraries or dependencies without evaluating their security, licensing, or compatibility risks.',
          'The use of unreliable or insecure libraries can expose the application to security vulnerabilities, licensing issues, and compatibility problems.',
          'Integrate a vetting process that evaluates libraries based on security, licensing, and compatibility checks before recommending them in code suggestions.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      }
  ];


  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/updated-enterprise-readiness-report-lumbar-level0", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Enterprise Readiness Insights Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);


  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Trustworthy AI Controls','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Maturity Assessment','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Maturity Levels','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Assessment Findings','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Assessment Results','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Gap Analysis','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    // {
    //   row: ['8. Key for Takeaways','6'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // },
    // {
    //   row: ['9. Users and Territories', '9'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  
  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Objective", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The objective of this assessment is to evaluate the organization's AI maturity, focusing on the seamless integration of AI solutions into every aspect of business operations. This evaluation aims to validate the company's commitment to leveraging AI for enhanced performance and innovation. ",
    "left",
    6
  );
  pdfService.drawSubHeader("Methodology: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A comprehensive mixed-method approach was utilized, comprising:",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Stakeholder Interviews: In-depth discussions with department leaders and AI practitioners to understand the AI strategy and its business alignment. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Data & Infrastructure Audit: Analysis of existing data pipelines and cloud infrastructure supporting AI initiatives. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Model Audits: Review of key AI models, focusing on security, compliance, and explainability. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Surveys: Employee feedback was collected to gauge the impact of AI on daily operations and overall productivity. ",
    "left",
    16
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("2. TrustWorthy AI Controls", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A Trustworthy AI Framework is essential for guiding the ethical development, deployment, and governance of artificial intelligence systems. As AI becomes more integrated into various facets of society, ensuring its alignment with human values—such as fairness, transparency, accountability, and inclusiveness—is crucial. This framework outlines core principles and practical steps to create AI systems that respect user privacy, prioritize security, and foster fairness while minimizing risks. With a commitment to transparent and responsible practices, the Trustworthy AI Framework builds user trust, supports compliance with regulations, and promotes AI innovations that are both ethical and sustainable. By adopting this approach, organizations can develop AI technologies that not only enhance business and operational capabilities but also earn public confidence and contribute positively to society.",
    "left"
  );

  pdfService.setCurrentY(10);
  pdfService.drawHeading("3. AI Maturity Assessment", "left");
  pdfService.drawWrappedText(
    "An AI Maturity Assessment is a structured evaluation of an organization's AI capabilities across key dimensions, including strategy, governance, data management, model development, deployment, and integration. This assessment enables organizations to understand their current AI maturity level and identify areas for improvement. By examining how well AI initiatives align with business goals and assessing data quality and governance frameworks, organizations can create strategic plans that enhance their AI practices. Ultimately, an AI Maturity Assessment provides valuable insights that help organizations prioritize AI initiatives, optimize resource allocation, and drive successful AI adoption in alignment with their long-term objectives.",
    "left"
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("4. Maturity Levels", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This section assesses a company's progress across FUSEFY's six maturity levels:",
    "left"
  );
  pdfService.setCurrentY(1);

  const tableData1 = [
    {
      row: [
        "Level 0: AI Awareness",
        "At the AI Awareness stage, organizations are recognizing the potential of AI but have not initiated any AI projects or strategies. There may be limited understanding of AI technologies, benefits, and implications within the organization. No formal AI governance structures, policies, or data strategies specific to AI are in place.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor : [rgb(0, 0, 0.5), rgb(1,1,1)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
    
    
    
    
    
  ];
  pdfService.setCurrentY(15);
  // pdfService.drawHeading(" ", "left");
  pdfService.renderTable(tableData1, [140,340]);
  // pdfService.setCurrentY(85);

  pdfService.setCurrentY(15);

  // pdfService.setCurrentY(10);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Assessment Findings", "left");

  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The organization has established a fully autonomous AI system capable of self-optimization, dynamic decision-making, and proactive adaptations to market changes. The AI infrastructure supports continuous learning and improvement, ensuring that the company maintains a competitive edge. However, ongoing governance and ethical considerations remain crucial to sustain trust and accountability.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("i. Architecture Diagram", "left", 6);
  pdfService.setCurrentY(10);

  // await pdfService.addURLImage(
  //   "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  // );
  await pdfService.addLocalImage('./assets/updated-arch.png');

  pdfService.setCurrentY(10);

  // pdfService.setCurrentY(200);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Data Sets: The processed data is organized into Data Sets (Section 3), which includes training data and RAG (Retrieval-Augmented Generation) data, such as vector and graph databases. This helps support various AI models that rely on well-prepared and structured data.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Inventory: The AI Inventory (Section 4) acts as a repository that catalogs data, registers models, and stores features, enabling efficient access to various AI assets. It includes access control, versioning, deployment management, and integrity checks.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Training and Development: In the Training and Development phase (Section 5), different AI models are developed, including supervised, unsupervised, and reinforcement learning models, as well as GenAI (Generative AI) and LLM (Large Language Models) models. This section supports a wide range of AI techniques, from traditional models to advanced deep learning methods.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Serving and Inference: The Serving and Inference stage (Section 6) covers model deployment, governance, and monitoring. Here, models are served through gateways and monitored for performance, bias, and human feedback, ensuring that they meet quality and ethical standards.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Multi-Agent Systems: Multi-Agent Systems (Section 7) enable advanced functionalities such as output grounding, agent routing, and prompt engineering. These systems support orchestration, complex task automation, and enhanced interaction flows in AI applications.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Use Cases: The architecture culminates in AI Use Cases (Section 8), which categorize applications into user productivity, developer productivity, and business use cases. These include chatbots, AI copilot tools, API integrations, AI testing, adaptive UX, and more, showcasing how AI can drive productivity and business efficiency.",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("ii. Executive Summary", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Overview", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Level 0 - The organization has a basic recognition of AI's potential but has yet to embark on any AI-specific projects, strategies, or initiatives. The organization may have started exploring the concept of AI but lacks in-depth understanding, structured plans, or dedicated resources.",
    "left",
    10
  );

  // pdfService.setCurrentY(20);

  pdfService.setCurrentY(6);

  pdfService.drawSubHeader("Scope of Assessment:", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The assessment covers several critical areas of AI adoption, including: ",
    "left",
    10
  );

  const aiAdoptionCriticalAreas = [
    {
      row: [
        "AI Implementation",
        "Evaluation of current AI use cases, their alignment with business objectives, and overall impact on operational efficiency.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
  ];
  // pdfService.setCurrentY(90);

  // pdfService.drawHeading("","left");
  pdfService.setCurrentY(6);
  pdfService.renderTable(aiAdoptionCriticalAreas, [140,340]);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Assesment Results", "left");

  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Current Maturity Level:", "left", 6);
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "The organization is currently positioned at Maturity Level 0. AI initiatives are sporadic and lack a clear strategy or integration across business functions. AI activities, if any, are primarily experimental, with no established framework to guide AI development or deployment.",
    "left",
    6
  );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Data Infrastructure", "left", 6);
  pdfService.drawWrappedText(
    "The organization has minimal or no data infrastructure in place to support AI. Data is often siloed, lacking integration or consistency, which limits accessibility and reliability for potential AI applications.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Security & Compliance:", "left", 6);
  pdfService.drawWrappedText(
    "There are limited security measures or compliance protocols specific to AI. Data privacy concerns may be insufficiently addressed, creating potential risks in the absence of standardized security practices for AI deployments.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Trustworthy AI:", "left", 6);
  pdfService.drawWrappedText(
    "There is minimal awareness or consideration of transparency, fairness, or accountability in AI practices. Ethical guidelines are either lacking or are only beginning to be explored, and there are no measures to detect or mitigate biases in AI outputs.",
    "left",
    6
  );

  pdfService.setCurrentY(15);
  pdfService.drawSubHeader("TCO Graph", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The Total Cost of Ownership (TCO) Graph provides a breakdown of the expenses associated with maintaining the current architecture for Level 0. This chart illustrates costs across infrastructure, software licenses, maintenance, and operational resources. Understanding the TCO at Level 0 highlights the financial commitment required to sustain the current AI setup and serves as a baseline for evaluating potential cost efficiencies as maturity levels advance. This information helps decision-makers assess whether future investments in AI capability enhancements align with budgetary goals and ROI expectations.","left",8);

  pdfService.setCurrentY(6);
  // await pdfService.addLocalImage("./assets/graph1.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph2.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph3.png");
  // pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/AI-AST-003_tco_graph.jpeg",700,1);

  // pdfService.setCurrentY(180);
  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(3);
  // page.drawImage(tcoGraph2Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )150, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(1)0;
  // pdfService.addLocalImage("./assets/graph3.png");

  // page.drawImage(tcoGraph3Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )310, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  pdfService.setCurrentY(10);
  pdfService.drawHeading("7. Gap Analysis", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Key Gaps Identified: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "At Maturity Level 0, the organization lacks foundational AI strategies and infrastructure. There is a need for structured planning, skill development, and data readiness to support any meaningful AI initiatives. Additionally, there is minimal alignment between AI experimentation and broader business goals.",
    "left",
    6
  );
  pdfService.setCurrentY(5);
  pdfService.drawSubHeader("Actions Required:", "left", 6);
  pdfService.drawWrappedText(
    "• Current Status: The current assessment reveals that while the organization has foundational components in place, there are significant gaps in advanced AI capabilities required for achieving higher maturity levels. These areas of improvement primarily center around strategic prioritization of use cases that align closely with business goals.",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Action Required: The recommended next step is a targeted use case prioritization process. This involves identifying high-impact use cases that not only support immediate business objectives but also pave the way for scalable AI adoption across the organization. This prioritization will guide resource allocation, tool selection, and the strategic roadmap for AI deployment, ensuring that the organization focuses on initiatives that maximize both value and feasibility.",
    "left",
    16
  );
  // pdfService.drawWrappedText(
  //   "• Basic Security and Compliance Measures: Introduce initial security protocols and compliance measures to protect data privacy and adhere to relevant regulatory standards, setting a foundation for ethical AI development.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Awareness and Skill Building: Conduct training and workshops to raise awareness of AI potential and develop core skills among stakeholders, promoting understanding of AI benefits and limitations.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Stakeholder Alignment: Engage with key stakeholders to define AI's role within the organization, ensuring initial AI efforts are relevant and support organizational objectives.",
  //   "left",
  //   16
  // );

  pdfService.setCurrentY(20);

  const pdfBytes = await pdfService.generatePDF();

  // Set headers to prompt download
  res.setHeader("Content-Disposition", "attachment; filename=enterprise_readiness_report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  res.send(Buffer.from(pdfBytes));
});


app.get("/updated-enterprise-readiness-report-lumbar-level3", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Enterprise Readiness Insights Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);


  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Trustworthy AI Controls','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Maturity Assessment','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Maturity Levels','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Assessment Findings','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Assessment Results','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Gap Analysis','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    // {
    //   row: ['8. Key for Takeaways','6'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // },
    // {
    //   row: ['9. Users and Territories', '9'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  
  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Objective", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The objective of this assessment is to evaluate the organization's AI maturity, focusing on the seamless integration of AI solutions into every aspect of business operations. This evaluation aims to validate the company's commitment to leveraging AI for enhanced performance and innovation. ",
    "left",
    6
  );
  pdfService.drawSubHeader("Methodology: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A comprehensive mixed-method approach was utilized, comprising:",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Stakeholder Interviews: In-depth discussions with department leaders and AI practitioners to understand the AI strategy and its business alignment. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Data & Infrastructure Audit: Analysis of existing data pipelines and cloud infrastructure supporting AI initiatives. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Model Audits: Review of key AI models, focusing on security, compliance, and explainability. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Surveys: Employee feedback was collected to gauge the impact of AI on daily operations and overall productivity. ",
    "left",
    16
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("2. TrustWorthy AI Controls", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A Trustworthy AI Framework is essential for guiding the ethical development, deployment, and governance of artificial intelligence systems. As AI becomes more integrated into various facets of society, ensuring its alignment with human values—such as fairness, transparency, accountability, and inclusiveness—is crucial. This framework outlines core principles and practical steps to create AI systems that respect user privacy, prioritize security, and foster fairness while minimizing risks. With a commitment to transparent and responsible practices, the Trustworthy AI Framework builds user trust, supports compliance with regulations, and promotes AI innovations that are both ethical and sustainable. By adopting this approach, organizations can develop AI technologies that not only enhance business and operational capabilities but also earn public confidence and contribute positively to society.",
    "left"
  );

  pdfService.setCurrentY(10);
  pdfService.drawHeading("3. AI Maturity Assessment", "left");
  pdfService.drawWrappedText(
    "An AI Maturity Assessment is a structured evaluation of an organization's AI capabilities across key dimensions, including strategy, governance, data management, model development, deployment, and integration. This assessment enables organizations to understand their current AI maturity level and identify areas for improvement. By examining how well AI initiatives align with business goals and assessing data quality and governance frameworks, organizations can create strategic plans that enhance their AI practices. Ultimately, an AI Maturity Assessment provides valuable insights that help organizations prioritize AI initiatives, optimize resource allocation, and drive successful AI adoption in alignment with their long-term objectives.",
    "left"
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("4. Maturity Levels", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This section assesses a company's progress across FUSEFY's six maturity levels:",
    "left"
  );
  pdfService.setCurrentY(1);

  const tableData1 = [
    {
      row: [
        "Level 0: AI Awareness",
        "At the AI Awareness stage, organizations are recognizing the potential of AI but have not initiated any AI projects or strategies. There may be limited understanding of AI technologies, benefits, and implications within the organization. No formal AI governance structures, policies, or data strategies specific to AI are in place.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor : [rgb(0, 0, 0.5), rgb(1,1,1)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
    
    
    
    
    
  ];
  pdfService.setCurrentY(15);
  // pdfService.drawHeading(" ", "left");
  pdfService.renderTable(tableData1, [140,340]);
  // pdfService.setCurrentY(85);

  pdfService.setCurrentY(15);

  // pdfService.setCurrentY(10);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Assessment Findings", "left");

  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The organization has developed an advanced AI system that leverages dynamic decision-making and self-optimization capabilities to adapt proactively to market changes. The infrastructure supports continuous learning and improvement, enabling enhanced operational efficiency and strategic alignment. At this maturity level, governance frameworks and ethical guidelines are being actively reinforced to ensure trust, transparency, and accountability.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("i. Architecture Diagram", "left", 6);
  pdfService.setCurrentY(10);

  // await pdfService.addURLImage(
  //   "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  // );
  await pdfService.addLocalImage('./assets/updated-arch.png');

  pdfService.setCurrentY(10);

  // pdfService.setCurrentY(200);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Data Sets: The processed data is organized into Data Sets (Section 3), which includes training data and RAG (Retrieval-Augmented Generation) data, such as vector and graph databases. This helps support various AI models that rely on well-prepared and structured data.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Inventory: The AI Inventory (Section 4) acts as a repository that catalogs data, registers models, and stores features, enabling efficient access to various AI assets. It includes access control, versioning, deployment management, and integrity checks.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Training and Development: In the Training and Development phase (Section 5), different AI models are developed, including supervised, unsupervised, and reinforcement learning models, as well as GenAI (Generative AI) and LLM (Large Language Models) models. This section supports a wide range of AI techniques, from traditional models to advanced deep learning methods.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Serving and Inference: The Serving and Inference stage (Section 6) covers model deployment, governance, and monitoring. Here, models are served through gateways and monitored for performance, bias, and human feedback, ensuring that they meet quality and ethical standards.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Multi-Agent Systems: Multi-Agent Systems (Section 7) enable advanced functionalities such as output grounding, agent routing, and prompt engineering. These systems support orchestration, complex task automation, and enhanced interaction flows in AI applications.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Use Cases: The architecture culminates in AI Use Cases (Section 8), which categorize applications into user productivity, developer productivity, and business use cases. These include chatbots, AI copilot tools, API integrations, AI testing, adaptive UX, and more, showcasing how AI can drive productivity and business efficiency.",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("ii. Executive Summary", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Overview", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Level 3 - The organization demonstrates a robust implementation of AI solutions with a focus on achieving tangible business outcomes. AI is integrated into key operations, enabling enhanced decision-making and operational efficiency. The organization has established structured processes, dedicated resources, and a strategic approach to leverage AI effectively, though scalability and advanced governance frameworks are still being refined.",
    "left",
    10
  );

  // pdfService.setCurrentY(20);

  pdfService.setCurrentY(6);

  pdfService.drawSubHeader("Scope of Assessment:", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The assessment covers several critical areas of AI adoption, including: ",
    "left",
    10
  );

  const aiAdoptionCriticalAreas = [
    {
      row: [
        "AI Implementation",
        "Evaluation of current AI use cases, their alignment with business objectives, and overall impact on operational efficiency.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
  ];
  // pdfService.setCurrentY(90);

  // pdfService.drawHeading("","left");
  pdfService.setCurrentY(6);
  pdfService.renderTable(aiAdoptionCriticalAreas, [140,340]);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Assesment Results", "left");

  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Current Maturity Level:", "left", 6);
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "The organization is currently positioned at Maturity Level 3. AI initiatives are strategically aligned with business objectives and integrated across key functions. AI solutions are implemented with structured frameworks, enabling consistent development and deployment. The focus is on enhancing operational efficiency and decision-making, with ongoing efforts to refine scalability and governance practices.",
    "left",
    6
  );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Data Infrastructure", "left", 6);
  pdfService.drawWrappedText(
    "The organization has a robust data infrastructure to support AI initiatives. Data is effectively integrated and managed, ensuring consistency, accessibility, and reliability. Efforts are ongoing to optimize data pipelines and enhance scalability for expanding AI operations.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Security & Compliance:", "left", 6);
  pdfService.drawWrappedText(
    "The organization has established security measures and compliance protocols tailored to AI. Data privacy is actively managed, and standardized practices are in place to address security concerns, reducing risks associated with AI deployments.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Trustworthy AI:", "left", 6);
  pdfService.drawWrappedText(
    "The organization prioritizes transparency, fairness, and accountability in its AI practices. Ethical guidelines are well-defined, and measures are in place to detect and mitigate biases, ensuring AI outputs align with organizational values and stakeholder expectations.",
    "left",
    6
  );


  pdfService.setCurrentY(15);
  pdfService.drawSubHeader("TCO Graph", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("At Level 3, understanding the Total Cost of Ownership (TCO) emphasizes the financial investment necessary to maintain the existing AI infrastructure. It serves as a benchmark for identifying opportunities to optimize costs as the organization progresses to higher maturity levels. This insight enables decision-makers to evaluate whether future enhancements to AI capabilities align with budget priorities and return on investment (ROI) objectives.","left",8);


  pdfService.setCurrentY(6);
  // await pdfService.addLocalImage("./assets/graph1.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph2.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph3.png");
  // pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/AI-AST-004_tco_graph.jpeg",700,1);

  // pdfService.setCurrentY(180);
  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(3);
  // page.drawImage(tcoGraph2Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )150, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(1)0;
  // pdfService.addLocalImage("./assets/graph3.png");

  // page.drawImage(tcoGraph3Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )310, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  pdfService.setCurrentY(10);
  pdfService.drawHeading("7. Gap Analysis", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Key Gaps Identified: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "At Maturity Level 3, the organization has established foundational AI strategies and infrastructure. Structured planning, skill development, and data readiness are in place to support scalable AI initiatives. AI solutions are aligned with broader business objectives, driving meaningful impact and operational efficiency across key functions.",
    "left",
    6
  );
  pdfService.setCurrentY(5);
  pdfService.drawSubHeader("Actions Required:", "left", 6);
  pdfService.drawWrappedText(
    "• Current Status: The assessment highlights that the organization has successfully established foundational AI capabilities and infrastructure. However, to advance to higher maturity levels, the focus should shift towards optimizing existing systems, enhancing scalability, and strengthening governance frameworks to support long-term AI integration.",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Action Required: The next step involves refining and expanding AI initiatives by targeting use cases that deliver strategic value and operational efficiency. This includes scaling existing AI solutions, integrating advanced tools and frameworks, and reinforcing alignment with business objectives. A clear strategic roadmap should be developed to allocate resources effectively and drive impactful AI adoption across the organization.",
    "left",
    16
  );

  // pdfService.drawWrappedText(
  //   "• Basic Security and Compliance Measures: Introduce initial security protocols and compliance measures to protect data privacy and adhere to relevant regulatory standards, setting a foundation for ethical AI development.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Awareness and Skill Building: Conduct training and workshops to raise awareness of AI potential and develop core skills among stakeholders, promoting understanding of AI benefits and limitations.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Stakeholder Alignment: Engage with key stakeholders to define AI's role within the organization, ensuring initial AI efforts are relevant and support organizational objectives.",
  //   "left",
  //   16
  // );

  pdfService.setCurrentY(20);

  const pdfBytes = await pdfService.generatePDF();

  // Set headers to prompt download
  res.setHeader("Content-Disposition", "attachment; filename=enterprise_readiness_report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  res.send(Buffer.from(pdfBytes));
});

app.get("/updated-enterprise-readiness-report-healthcare-level0", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Enterprise Readiness Insights Report - Healthcare'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);


  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Trustworthy AI Controls','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Maturity Assessment','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Maturity Levels','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Assessment Findings','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Assessment Results','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Gap Analysis','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    // {
    //   row: ['8. Key for Takeaways','6'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // },
    // {
    //   row: ['9. Users and Territories', '9'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  
  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Objective", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The objective of this assessment is to evaluate the organization's AI maturity, focusing on the seamless integration of AI solutions into every aspect of business operations. This evaluation aims to validate the company's commitment to leveraging AI for enhanced performance and innovation. ",
    "left",
    6
  );
  pdfService.drawSubHeader("Methodology: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A comprehensive mixed-method approach was utilized, comprising:",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Stakeholder Interviews: In-depth discussions with department leaders and AI practitioners to understand the AI strategy and its business alignment. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Data & Infrastructure Audit: Analysis of existing data pipelines and cloud infrastructure supporting AI initiatives. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Model Audits: Review of key AI models, focusing on security, compliance, and explainability. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Surveys: Employee feedback was collected to gauge the impact of AI on daily operations and overall productivity. ",
    "left",
    16
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("2. TrustWorthy AI Controls", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A Trustworthy AI Framework is essential for guiding the ethical development, deployment, and governance of artificial intelligence systems. As AI becomes more integrated into various facets of society, ensuring its alignment with human values—such as fairness, transparency, accountability, and inclusiveness—is crucial. This framework outlines core principles and practical steps to create AI systems that respect user privacy, prioritize security, and foster fairness while minimizing risks. With a commitment to transparent and responsible practices, the Trustworthy AI Framework builds user trust, supports compliance with regulations, and promotes AI innovations that are both ethical and sustainable. By adopting this approach, organizations can develop AI technologies that not only enhance business and operational capabilities but also earn public confidence and contribute positively to society.",
    "left"
  );

  pdfService.setCurrentY(10);
  pdfService.drawHeading("3. AI Maturity Assessment", "left");
  pdfService.drawWrappedText(
    "An AI Maturity Assessment is a structured evaluation of an organization's AI capabilities across key dimensions, including strategy, governance, data management, model development, deployment, and integration. This assessment enables organizations to understand their current AI maturity level and identify areas for improvement. By examining how well AI initiatives align with business goals and assessing data quality and governance frameworks, organizations can create strategic plans that enhance their AI practices. Ultimately, an AI Maturity Assessment provides valuable insights that help organizations prioritize AI initiatives, optimize resource allocation, and drive successful AI adoption in alignment with their long-term objectives.",
    "left"
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("4. Maturity Levels", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This section assesses a company's progress across FUSEFY's six maturity levels:",
    "left"
  );
  pdfService.setCurrentY(1);

  const tableData1 = [
    {
      row: [
        "Level 0: AI Awareness",
        "At the AI Awareness stage, organizations are recognizing the potential of AI but have not initiated any AI projects or strategies. There may be limited understanding of AI technologies, benefits, and implications within the organization. No formal AI governance structures, policies, or data strategies specific to AI are in place.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor : [rgb(0, 0, 0.5), rgb(1,1,1)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
    
    
    
    
    
  ];
  pdfService.setCurrentY(15);
  // pdfService.drawHeading(" ", "left");
  pdfService.renderTable(tableData1, [140,340]);
  // pdfService.setCurrentY(85);

  pdfService.setCurrentY(15);

  // pdfService.setCurrentY(10);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Assessment Findings", "left");

  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The organization has established a fully autonomous AI system capable of self-optimization, dynamic decision-making, and proactive adaptations to market changes. The AI infrastructure supports continuous learning and improvement, ensuring that the company maintains a competitive edge. However, ongoing governance and ethical considerations remain crucial to sustain trust and accountability.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("i. Architecture Diagram", "left", 6);
  pdfService.setCurrentY(10);

  // await pdfService.addURLImage(
  //   "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  // );
  await pdfService.addLocalImage('./assets/updated-arch.png');

  pdfService.setCurrentY(10);

  // pdfService.setCurrentY(200);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Data Sets: The processed data is organized into Data Sets (Section 3), which includes training data and RAG (Retrieval-Augmented Generation) data, such as vector and graph databases. This helps support various AI models that rely on well-prepared and structured data.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Inventory: The AI Inventory (Section 4) acts as a repository that catalogs data, registers models, and stores features, enabling efficient access to various AI assets. It includes access control, versioning, deployment management, and integrity checks.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Training and Development: In the Training and Development phase (Section 5), different AI models are developed, including supervised, unsupervised, and reinforcement learning models, as well as GenAI (Generative AI) and LLM (Large Language Models) models. This section supports a wide range of AI techniques, from traditional models to advanced deep learning methods.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Serving and Inference: The Serving and Inference stage (Section 6) covers model deployment, governance, and monitoring. Here, models are served through gateways and monitored for performance, bias, and human feedback, ensuring that they meet quality and ethical standards.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Multi-Agent Systems: Multi-Agent Systems (Section 7) enable advanced functionalities such as output grounding, agent routing, and prompt engineering. These systems support orchestration, complex task automation, and enhanced interaction flows in AI applications.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Use Cases: The architecture culminates in AI Use Cases (Section 8), which categorize applications into user productivity, developer productivity, and business use cases. These include chatbots, AI copilot tools, API integrations, AI testing, adaptive UX, and more, showcasing how AI can drive productivity and business efficiency.",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("ii. Executive Summary", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Overview", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Level 0 - The organization has a basic recognition of AI's potential but has yet to embark on any AI-specific projects, strategies, or initiatives. The organization may have started exploring the concept of AI but lacks in-depth understanding, structured plans, or dedicated resources.",
    "left",
    10
  );

  // pdfService.setCurrentY(20);

  pdfService.setCurrentY(6);

  pdfService.drawSubHeader("Scope of Assessment:", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The assessment covers several critical areas of AI adoption, including: ",
    "left",
    10
  );

  const aiAdoptionCriticalAreas = [
    {
      row: [
        "AI Implementation",
        "Evaluation of current AI use cases, their alignment with business objectives, and overall impact on operational efficiency.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
  ];
  // pdfService.setCurrentY(90);

  // pdfService.drawHeading("","left");
  pdfService.setCurrentY(6);
  pdfService.renderTable(aiAdoptionCriticalAreas, [140,340]);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Assesment Results", "left");

  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Current Maturity Level:", "left", 6);
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "The organization is currently positioned at Maturity Level 0. AI initiatives are sporadic and lack a clear strategy or integration across business functions. AI activities, if any, are primarily experimental, with no established framework to guide AI development or deployment.",
    "left",
    6
  );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Data Infrastructure", "left", 6);
  pdfService.drawWrappedText(
    "The organization has minimal or no data infrastructure in place to support AI. Data is often siloed, lacking integration or consistency, which limits accessibility and reliability for potential AI applications.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Security & Compliance:", "left", 6);
  pdfService.drawWrappedText(
    "There are limited security measures or compliance protocols specific to AI. Data privacy concerns may be insufficiently addressed, creating potential risks in the absence of standardized security practices for AI deployments.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Trustworthy AI:", "left", 6);
  pdfService.drawWrappedText(
    "There is minimal awareness or consideration of transparency, fairness, or accountability in AI practices. Ethical guidelines are either lacking or are only beginning to be explored, and there are no measures to detect or mitigate biases in AI outputs.",
    "left",
    6
  );

  pdfService.setCurrentY(15);
  pdfService.drawSubHeader("TCO Graph", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("The Total Cost of Ownership (TCO) Graph provides a breakdown of the expenses associated with maintaining the current architecture for Level 0. This chart illustrates costs across infrastructure, software licenses, maintenance, and operational resources. Understanding the TCO at Level 0 highlights the financial commitment required to sustain the current AI setup and serves as a baseline for evaluating potential cost efficiencies as maturity levels advance. This information helps decision-makers assess whether future investments in AI capability enhancements align with budgetary goals and ROI expectations.","left",8);

  pdfService.setCurrentY(6);
  // await pdfService.addLocalImage("./assets/graph1.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph2.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph3.png");
  // pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/AI-AST-005_tco_graph.jpeg",600,1);

  // pdfService.setCurrentY(180);
  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(3);
  // page.drawImage(tcoGraph2Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )150, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(1)0;
  // pdfService.addLocalImage("./assets/graph3.png");

  // page.drawImage(tcoGraph3Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )310, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  pdfService.setCurrentY(10);
  pdfService.drawHeading("7. Gap Analysis", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Key Gaps Identified: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "At Maturity Level 0, the organization lacks foundational AI strategies and infrastructure. There is a need for structured planning, skill development, and data readiness to support any meaningful AI initiatives. Additionally, there is minimal alignment between AI experimentation and broader business goals.",
    "left",
    6
  );
  pdfService.setCurrentY(5);
  pdfService.drawSubHeader("Actions Required:", "left", 6);
  pdfService.drawWrappedText(
    "• Current Status: The current assessment reveals that while the organization has foundational components in place, there are significant gaps in advanced AI capabilities required for achieving higher maturity levels. These areas of improvement primarily center around strategic prioritization of use cases that align closely with business goals.",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Action Required: The recommended next step is a targeted use case prioritization process. This involves identifying high-impact use cases that not only support immediate business objectives but also pave the way for scalable AI adoption across the organization. This prioritization will guide resource allocation, tool selection, and the strategic roadmap for AI deployment, ensuring that the organization focuses on initiatives that maximize both value and feasibility.",
    "left",
    16
  );
  // pdfService.drawWrappedText(
  //   "• Basic Security and Compliance Measures: Introduce initial security protocols and compliance measures to protect data privacy and adhere to relevant regulatory standards, setting a foundation for ethical AI development.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Awareness and Skill Building: Conduct training and workshops to raise awareness of AI potential and develop core skills among stakeholders, promoting understanding of AI benefits and limitations.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Stakeholder Alignment: Engage with key stakeholders to define AI's role within the organization, ensuring initial AI efforts are relevant and support organizational objectives.",
  //   "left",
  //   16
  // );

  pdfService.setCurrentY(20);

  const pdfBytes = await pdfService.generatePDF();

  // Set headers to prompt download
  res.setHeader("Content-Disposition", "attachment; filename=enterprise_readiness_report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  res.send(Buffer.from(pdfBytes));
});

app.get("/updated-enterprise-readiness-report-healthcare-level3", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Enterprise Readiness Insights Report - Healthcare'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','06/06/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(420);


  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','1'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Trustworthy AI Controls','2'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. AI Maturity Assessment','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Maturity Levels','4'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Assessment Findings','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. Assessment Results','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. Gap Analysis','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    // {
    //   row: ['8. Key for Takeaways','6'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // },
    // {
    //   row: ['9. Users and Territories', '9'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
    // },
    // {
    //   row: ['11. Conclusion','7'],
    //   color: [rgb(0,0,0), rgb(0,0,0)],
    //   bgColor: [rgb(1,1,1), rgb(1,1,1)]
    // }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  
  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Objective", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The objective of this assessment is to evaluate the organization's AI maturity, focusing on the seamless integration of AI solutions into every aspect of business operations. This evaluation aims to validate the company's commitment to leveraging AI for enhanced performance and innovation. ",
    "left",
    6
  );
  pdfService.drawSubHeader("Methodology: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A comprehensive mixed-method approach was utilized, comprising:",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Stakeholder Interviews: In-depth discussions with department leaders and AI practitioners to understand the AI strategy and its business alignment. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Data & Infrastructure Audit: Analysis of existing data pipelines and cloud infrastructure supporting AI initiatives. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Model Audits: Review of key AI models, focusing on security, compliance, and explainability. ",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Surveys: Employee feedback was collected to gauge the impact of AI on daily operations and overall productivity. ",
    "left",
    16
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("2. TrustWorthy AI Controls", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "A Trustworthy AI Framework is essential for guiding the ethical development, deployment, and governance of artificial intelligence systems. As AI becomes more integrated into various facets of society, ensuring its alignment with human values—such as fairness, transparency, accountability, and inclusiveness—is crucial. This framework outlines core principles and practical steps to create AI systems that respect user privacy, prioritize security, and foster fairness while minimizing risks. With a commitment to transparent and responsible practices, the Trustworthy AI Framework builds user trust, supports compliance with regulations, and promotes AI innovations that are both ethical and sustainable. By adopting this approach, organizations can develop AI technologies that not only enhance business and operational capabilities but also earn public confidence and contribute positively to society.",
    "left"
  );

  pdfService.setCurrentY(10);
  pdfService.drawHeading("3. AI Maturity Assessment", "left");
  pdfService.drawWrappedText(
    "An AI Maturity Assessment is a structured evaluation of an organization's AI capabilities across key dimensions, including strategy, governance, data management, model development, deployment, and integration. This assessment enables organizations to understand their current AI maturity level and identify areas for improvement. By examining how well AI initiatives align with business goals and assessing data quality and governance frameworks, organizations can create strategic plans that enhance their AI practices. Ultimately, an AI Maturity Assessment provides valuable insights that help organizations prioritize AI initiatives, optimize resource allocation, and drive successful AI adoption in alignment with their long-term objectives.",
    "left"
  );

  pdfService.setCurrentY(15);
  pdfService.drawHeading("4. Maturity Levels", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This section assesses a company's progress across FUSEFY's six maturity levels:",
    "left"
  );
  pdfService.setCurrentY(1);

  const tableData1 = [
    {
      row: [
        "Level 0: AI Awareness",
        "At the AI Awareness stage, organizations are recognizing the potential of AI but have not initiated any AI projects or strategies. There may be limited understanding of AI technologies, benefits, and implications within the organization. No formal AI governance structures, policies, or data strategies specific to AI are in place.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor : [rgb(0, 0, 0.5), rgb(1,1,1)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
    
    
    
    
    
  ];
  pdfService.setCurrentY(15);
  // pdfService.drawHeading(" ", "left");
  pdfService.renderTable(tableData1, [140,340]);
  // pdfService.setCurrentY(85);

  pdfService.setCurrentY(15);

  // pdfService.setCurrentY(10);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Assessment Findings", "left");

  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The organization has developed an advanced AI system that leverages dynamic decision-making and self-optimization capabilities to adapt proactively to market changes. The infrastructure supports continuous learning and improvement, enabling enhanced operational efficiency and strategic alignment. At this maturity level, governance frameworks and ethical guidelines are being actively reinforced to ensure trust, transparency, and accountability.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("i. Architecture Diagram", "left", 6);
  pdfService.setCurrentY(10);

  // await pdfService.addURLImage(
  //   "https://aiarmor-dev-bucket.s3.us-east-1.amazonaws.com/tco_architecture/tco-arch.jpg"
  // );
  await pdfService.addLocalImage('./assets/updated-arch.png');

  pdfService.setCurrentY(10);

  // pdfService.setCurrentY(200);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks. Additionally, Human-in-the-Loop (HITL) controls provide a level of human oversight, helping to monitor AI outputs and intervene when necessary, ensuring ethical standards and accuracy in AI applications.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. Data orchestration pipelines are set up within AI Data Engineering, allowing seamless integration and management of data flows for AI applications. Within AI Model Training, automated retraining, both batch-based and on-demand, is utilized to keep models up-to-date and adaptive to new information, while knowledge distillation and transfer techniques help scale models by condensing large language models (LLMs) into smaller, efficient ones.",
    "left",
    6
  );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Data Sets: The processed data is organized into Data Sets (Section 3), which includes training data and RAG (Retrieval-Augmented Generation) data, such as vector and graph databases. This helps support various AI models that rely on well-prepared and structured data.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Inventory: The AI Inventory (Section 4) acts as a repository that catalogs data, registers models, and stores features, enabling efficient access to various AI assets. It includes access control, versioning, deployment management, and integrity checks.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Training and Development: In the Training and Development phase (Section 5), different AI models are developed, including supervised, unsupervised, and reinforcement learning models, as well as GenAI (Generative AI) and LLM (Large Language Models) models. This section supports a wide range of AI techniques, from traditional models to advanced deep learning methods.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Serving and Inference: The Serving and Inference stage (Section 6) covers model deployment, governance, and monitoring. Here, models are served through gateways and monitored for performance, bias, and human feedback, ensuring that they meet quality and ethical standards.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Multi-Agent Systems: Multi-Agent Systems (Section 7) enable advanced functionalities such as output grounding, agent routing, and prompt engineering. These systems support orchestration, complex task automation, and enhanced interaction flows in AI applications.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• AI Use Cases: The architecture culminates in AI Use Cases (Section 8), which categorize applications into user productivity, developer productivity, and business use cases. These include chatbots, AI copilot tools, API integrations, AI testing, adaptive UX, and more, showcasing how AI can drive productivity and business efficiency.",
  //   "left",
  //   6
  // );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("ii. Executive Summary", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Overview", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Level 3 - The organization demonstrates a robust implementation of AI solutions with a focus on achieving tangible business outcomes. AI is integrated into key operations, enabling enhanced decision-making and operational efficiency. The organization has established structured processes, dedicated resources, and a strategic approach to leverage AI effectively, though scalability and advanced governance frameworks are still being refined.",
    "left",
    10
  );

  // pdfService.setCurrentY(20);

  pdfService.setCurrentY(6);

  pdfService.drawSubHeader("Scope of Assessment:", "left", 10);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The assessment covers several critical areas of AI adoption, including: ",
    "left",
    10
  );

  const aiAdoptionCriticalAreas = [
    {
      row: [
        "AI Implementation",
        "Evaluation of current AI use cases, their alignment with business objectives, and overall impact on operational efficiency.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 1)]
    }
    
  ];
  // pdfService.setCurrentY(90);

  // pdfService.drawHeading("","left");
  pdfService.setCurrentY(6);
  pdfService.renderTable(aiAdoptionCriticalAreas, [140,340]);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Assesment Results", "left");

  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Current Maturity Level:", "left", 6);
  pdfService.setCurrentY(3);

  pdfService.drawWrappedText(
    "The organization is currently positioned at Maturity Level 3. AI initiatives are strategically aligned with business objectives and integrated across key functions. AI solutions are implemented with structured frameworks, enabling consistent development and deployment. The focus is on enhancing operational efficiency and decision-making, with ongoing efforts to refine scalability and governance practices.",
    "left",
    6
  );
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("Data Infrastructure", "left", 6);
  pdfService.drawWrappedText(
    "The organization has a robust data infrastructure to support AI initiatives. Data is effectively integrated and managed, ensuring consistency, accessibility, and reliability. Efforts are ongoing to optimize data pipelines and enhance scalability for expanding AI operations.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Security & Compliance:", "left", 6);
  pdfService.drawWrappedText(
    "The organization has established security measures and compliance protocols tailored to AI. Data privacy is actively managed, and standardized practices are in place to address security concerns, reducing risks associated with AI deployments.",
    "left",
    6
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Trustworthy AI:", "left", 6);
  pdfService.drawWrappedText(
    "The organization prioritizes transparency, fairness, and accountability in its AI practices. Ethical guidelines are well-defined, and measures are in place to detect and mitigate biases, ensuring AI outputs align with organizational values and stakeholder expectations.",
    "left",
    6
  );


  pdfService.setCurrentY(15);
  pdfService.drawSubHeader("TCO Graph", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("At Level 3, understanding the Total Cost of Ownership (TCO) emphasizes the financial investment necessary to maintain the existing AI infrastructure. It serves as a benchmark for identifying opportunities to optimize costs as the organization progresses to higher maturity levels. This insight enables decision-makers to evaluate whether future enhancements to AI capabilities align with budget priorities and return on investment (ROI) objectives.","left",8);


  pdfService.setCurrentY(6);
  // await pdfService.addLocalImage("./assets/graph1.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph2.png");
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage("./assets/graph3.png");
  // pdfService.setCurrentY(3);
  await pdfService.addLocalImage("./assets/AI-AST-007_tco_graph.jpeg",700,1);

  // pdfService.setCurrentY(180);
  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(3);
  // page.drawImage(tcoGraph2Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )150, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  // pdfService.drawHeading(" ", "left");
  // pdfService.setCurrentY(10);
  // pdfService.setCurrentY(1)0;
  // pdfService.addLocalImage("./assets/graph3.png");

  // page.drawImage(tcoGraph3Img, {
  //   x: 90,
  //   y: pdfService.setCurrentY( )310, // Adjust the image position
  //   width: columnWidth * 0.8, // Adjust the image width
  //   height: 150, // Adjust the image height
  // });

  pdfService.setCurrentY(10);
  pdfService.drawHeading("7. Gap Analysis", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("Key Gaps Identified: ", "left", 6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "At Maturity Level 3, the organization has established foundational AI strategies and infrastructure. Structured planning, skill development, and data readiness are in place to support scalable AI initiatives. AI solutions are aligned with broader business objectives, driving meaningful impact and operational efficiency across key functions.",
    "left",
    6
  );
  pdfService.setCurrentY(5);
  pdfService.drawSubHeader("Actions Required:", "left", 6);
  pdfService.drawWrappedText(
    "• Current Status: The assessment highlights that the organization has successfully established foundational AI capabilities and infrastructure. However, to advance to higher maturity levels, the focus should shift towards optimizing existing systems, enhancing scalability, and strengthening governance frameworks to support long-term AI integration.",
    "left",
    16
  );
  pdfService.drawWrappedText(
    "• Action Required: The next step involves refining and expanding AI initiatives by targeting use cases that deliver strategic value and operational efficiency. This includes scaling existing AI solutions, integrating advanced tools and frameworks, and reinforcing alignment with business objectives. A clear strategic roadmap should be developed to allocate resources effectively and drive impactful AI adoption across the organization.",
    "left",
    16
  );

  // pdfService.drawWrappedText(
  //   "• Basic Security and Compliance Measures: Introduce initial security protocols and compliance measures to protect data privacy and adhere to relevant regulatory standards, setting a foundation for ethical AI development.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Awareness and Skill Building: Conduct training and workshops to raise awareness of AI potential and develop core skills among stakeholders, promoting understanding of AI benefits and limitations.",
  //   "left",
  //   16
  // );
  // pdfService.drawWrappedText(
  //   "• Stakeholder Alignment: Engage with key stakeholders to define AI's role within the organization, ensuring initial AI efforts are relevant and support organizational objectives.",
  //   "left",
  //   16
  // );

  pdfService.setCurrentY(20);

  const pdfBytes = await pdfService.generatePDF();

  // Set headers to prompt download
  res.setHeader("Content-Disposition", "attachment; filename=enterprise_readiness_report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  res.send(Buffer.from(pdfBytes));
});

app.get("/usecase-prioritization-updated-report-demand-forecasting", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "The Demand Forecasting solution leverages advanced AI and machine learning models to predict future demand patterns for products or services in real-time, specifically tailored for businesses within the supply chain and retail sectors. This tool analyzes historical sales data, market trends, and external factors such as seasonality, promotions, and economic conditions to generate accurate forecasts. By using these predictions, businesses can optimize inventory levels, reduce stockouts or overstocking, improve procurement strategies, and enhance overall supply chain efficiency."
    , 'left'
  );
  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Launch Announcement','Introduction of an AI-powered platform offering a comprehensive suite of services tailored to demand forecasting for building materials in the supply chain.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Product Launch','We are launching the Demand Forecasting AI Platform, a suite of AI-powered tools for supply chain professionals to help predict demand, optimize inventory, and identify the most suitable next actions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Purpose' , 'Utilize generative AI and predictive analytics to provide demand forecasts, inventory optimization, and actionable insights for professionals across the supply chain lifecycle.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Talent Amplification','Empower employees with AI-driven tools to enhance decision-making, streamline processes, and deliver increased value across procurement, inventory, and distribution functions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]    
    },
    {
      row: ['Key Customer Benefits','Improved Forecast Accuracy, Operational Efficiency,Increased productivity'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)] 
    },
    {
      row: ['Human In the Loop','Designed as assistive tools to augment professionals roles. These tools highlight operational opportunities and risks, improve productivity, and enable dynamic decision-making using real-time and historical data.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Intended Audience','Intended for internal stakeholders in the supply chain. The tools assist employees and teams without direct customer-facing functionalities.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Limitations of Offering',
        'Direct customer or external stakeholder access is not supported, Specific high-risk use cases require additional review and validation to ensure compliance.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Role Complexity','Addresses the complexities of supply chain management, including demand variability, diverse product lines, and distribution challenges. It helps navigate vast datasets and tailor responses to unique market demands.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Customer Challenges','Professionals face challenges in accurately predicting demand due to: Seasonal variability and regional differences, A wide range of building materials with differing demand cycles, Inefficiencies caused by siloed data across systems and stakeholders.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Identifying Customer Needs','Feedback from teams and stakeholders identified a need for centralized data access, tools to automate demand forecasting, and actionable insights for inventory and procurement planning.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Data Challenges','Data is often fragmented across internal systems (e.g., sales records, procurement logs, warehouse data) and external sources (e.g., housing market trends, weather data), making timely and accurate forecasting difficult.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Future Tools','Proposed tools to further enhance supply chain processes: Analyze supplier performance and optimize contracts.Logistics Copilot: Optimize distribution routes and schedules. Real-time inventory tracking and replenishment suggestions. Predict material demand shifts based on housing market trends.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Non Functional Requirements','High Availability, Secure and scalable infrastructure, Regular updates for data and content, Easy-to-use interface with minimal training requirements.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");
  pdfService.setCurrentY(3);

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  // const tableData = [
  //   {
  //     row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   // {
  //   //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
  //   //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //   //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   // }
  // ];

  // pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/tco-table-demand-forecasting.png',150, 0.6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("ROI Graph",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/tco-graph-demand.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap-updated1.png",160,0.9);
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. ",
    "left",
    6
  );
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage('./assets/demand-forecasting-low-level-arch.png',600,0.4);
  pdfService.setCurrentY(10);
  
  // pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  // pdfService.setCurrYTop(260);
  // pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  // await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  // pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("3. Maturity level 2","left",15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  // pdfService.setCurrYTop(320);
  // pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, the targeted user groups include approximately 120-150 professionals involved in planning and decision-making processes. The identified users are:",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Sales Operations Teams: ~50 users leveraging the tool to predict sales trends, identify seasonal demand variations, and align inventory planning with forecasted demand.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Inventory Managers: ~40 users utilizing forecasts to maintain optimal stock levels, minimizing both overstock and stockout scenarios.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Supply Chain Managers: ~30 users responsible for monitoring the overall supply chain performance and identifying bottlenecks, which can be addressed by optimizing inventory levels or improving supply chain processes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~30 users using forecast data to plan campaigns, align promotions, and optimize resource allocation for demand spikes.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from actionable insights and automated forecasting models, reducing manual intervention while maintaining accuracy through human-in-the-loop (HITL) processes.",
    "left",15
  );
  pdfService.setCurrentY(10);


  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For the Demand Forecasting Use Case, deployment will initially focus on regions with the highest operational impact and potential benefits.",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States and Canada, focusing on key operational hubs and warehouses.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In later phases, the tool may expand to European and Asian markets, particularly regions with complex demand cycles and high variability.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: Forecasting models and data analysis tools will adhere to regional regulations, including GDPR (for Europe) and CCPA (for the U.S.).",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: Incorporates regional demand trends, seasonality factors, and market-specific variables to ensure precise and actionable forecasts.",
    "left",25
  );
  pdfService.setCurrentY(10);



  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Demand Forecasting Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Data Accuracy Risk: Errors in historical sales or inventory data could lead to inaccurate demand forecasts, impacting supply chain decisions.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive trust in AI-generated forecasts without human oversight could result in strategic missteps, especially during unexpected market disruptions or external factors.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Compliance and Privacy Risk: Sensitive customer or sales data used in forecasting models must comply with data privacy laws, such as GDPR (EU) or CCPA (U.S.). Non-compliance may result in legal and reputational damage.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Scalability Challenges: Expanding the tool to global operations could expose performance limitations or regional biases in the forecasting model.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Bias in Forecasting Models: Historical biases in data could skew predictions, leading to inaccurate forecasts for specific regions, product categories, or demographic groups.",
    "left",
    25
  );

  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Implement robust data validation and cleaning processes to ensure the accuracy of input data.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Enforce a Human-in-the-Loop (HITL) process to review AI-generated forecasts before operational decisions are made.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Adhere to industry best practices and legal requirements for data privacy and security.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct regular audits of the forecasting model to identify and correct biases.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Design the system with scalability and adaptability in mind to support future expansions.",
    "left",
    25
  );




  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the anticipated financial benefits and strategic implications of investing in an AI-powered automation system for customer service. The project promises significant long-term ROI, aligning with organizational goals to enhance efficiency and customer satisfaction.",
    "left"
  );

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/usecase-prioritization-updated-report-codeassist", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Lumbar Supply chain managers'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "CodeAssist-GPT leverages cutting-edge AI technologies to support businesses with high-quality coding assistance, optimizing development workflows and improving productivity. It enables seamless integration into development environments and provides instant, context-aware solutions to complex coding challenges, thus empowering developers to enhance the quality and efficiency of their code."
    , 'left'
  );
  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Launch Announcement','Introduction of an AI-powered platform offering a comprehensive suite of services tailored to demand forecasting for building materials in the supply chain.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Product Launch','We are launching the Demand Forecasting AI Platform, a suite of AI-powered tools for supply chain professionals to help predict demand, optimize inventory, and identify the most suitable next actions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Purpose' , 'Utilize generative AI and predictive analytics to provide demand forecasts, inventory optimization, and actionable insights for professionals across the supply chain lifecycle.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Talent Amplification','Empower employees with AI-driven tools to enhance decision-making, streamline processes, and deliver increased value across procurement, inventory, and distribution functions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]    
    },
    {
      row: ['Key Customer Benefits','Improved Forecast Accuracy, Operational Efficiency,Increased productivity'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)] 
    },
    {
      row: ['Human In the Loop','Designed as assistive tools to augment professionals roles. These tools highlight operational opportunities and risks, improve productivity, and enable dynamic decision-making using real-time and historical data.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Intended Audience','Intended for internal stakeholders in the supply chain. The tools assist employees and teams without direct customer-facing functionalities.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Limitations of Offering',
        'Direct customer or external stakeholder access is not supported, Specific high-risk use cases require additional review and validation to ensure compliance.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Role Complexity','Addresses the complexities of supply chain management, including demand variability, diverse product lines, and distribution challenges. It helps navigate vast datasets and tailor responses to unique market demands.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Customer Challenges','Professionals face challenges in accurately predicting demand due to: Seasonal variability and regional differences, A wide range of building materials with differing demand cycles, Inefficiencies caused by siloed data across systems and stakeholders.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Identifying Customer Needs','Feedback from teams and stakeholders identified a need for centralized data access, tools to automate demand forecasting, and actionable insights for inventory and procurement planning.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Data Challenges','Data is often fragmented across internal systems (e.g., sales records, procurement logs, warehouse data) and external sources (e.g., housing market trends, weather data), making timely and accurate forecasting difficult.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Future Tools','Proposed tools to further enhance supply chain processes: Analyze supplier performance and optimize contracts.Logistics Copilot: Optimize distribution routes and schedules. Real-time inventory tracking and replenishment suggestions. Predict material demand shifts based on housing market trends.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Non Functional Requirements','High Availability, Secure and scalable infrastructure, Regular updates for data and content, Easy-to-use interface with minimal training requirements.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");
  pdfService.setCurrentY(3);

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  // const tableData = [
  //   {
  //     row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   // {
  //   //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
  //   //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //   //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   // }
  // ];

  // pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/codeassist-roi.png',150, 0.6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("ROI Graph",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/codeassist-roi-graph.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap-updated1.png",160,0.9);
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. ",
    "left",
    6
  );
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage('./assets/transformer-codeassist.png',350,1);
  pdfService.setCurrentY(10);
  
  // pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  // pdfService.setCurrYTop(260);
  // pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  // await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  // pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("3. Maturity level 2","left",15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  // pdfService.setCurrYTop(320);
  // pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);

  // Users Section
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The targeted user groups include software development professionals and organizations aiming to enhance their coding efficiency. The identified users are:",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Software Developers: ~60 users utilizing the tool for generating code snippets, assisting with debugging, and offering coding suggestions to enhance development speed and accuracy.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• QA Engineers: ~30 users using to automate test case generation, ensuring comprehensive coverage and reducing manual testing time.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• DevOps Teams: ~25 users leveraging the tool to streamline deployment scripts, enhance CI/CD pipeline automation, and maintain system infrastructure more efficiently.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Technical Writers: ~20 users benefiting from AI-generated documentation, ensuring better consistency and accuracy in documenting code changes and features.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from enhanced code quality, faster development cycles, and reduced manual effort, all while maintaining control through human-in-the-loop (HITL) processes.",
    "left",15
  );
  pdfService.setCurrentY(10);


  // Territories Section
  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For this, the deployment will initially target regions with strong tech ecosystems and high software development activity.",
    "left",15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States, Canada, and India, focusing on major tech hubs and software development centers.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In future phases, this may expand to Europe and Asia, particularly regions with rapidly growing software development markets and an increasing demand for AI-powered tools.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: The tool will adhere to regional data privacy regulations, including GDPR (for Europe), CCPA (for the U.S.), and others as necessary.",
    "left",25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: The tool will accommodate language preferences and local coding standards, ensuring better integration with regional development practices and optimizing the user experience.",
    "left",25
  );
  pdfService.setCurrentY(10);




  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Accuracy Risk: Errors in AI-generated code suggestions or incomplete context may result in incorrect or suboptimal code implementations, leading to potential bugs or performance issues.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive dependence on this for code generation, without sufficient human oversight, could lead to mistakes or missed opportunities for optimization, especially in complex or specialized coding tasks.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Security and Privacy Risk: Sensitive data used for training models or within code suggestions could pose privacy risks, especially in industries that handle sensitive information like healthcare or finance. Adequate safeguards and compliance with data protection laws, such as GDPR or HIPAA, are critical.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Ethical Bias: AI-driven code generation may inadvertently promote biased or unethical coding practices, such as excluding accessibility features or perpetuating harmful stereotypes, particularly in cases where data sources are skewed.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Integration and Compatibility Challenges: While this provides valuable code assistance, it may not always align seamlessly with specific development environments or technologies, posing integration challenges or requiring additional customization.",
    "left",
    25
  );


  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Implement comprehensive validation checks to ensure that AI-generated code suggestions align with project requirements and adhere to coding standards.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Establish a Human-in-the-Loop (HITL) process where developers review and verify AI-generated code to ensure correctness, efficiency, and adherence to best practices.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Incorporate secure coding practices and comply with data protection regulations, such as GDPR or HIPAA, to safeguard sensitive information during the code generation process.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Regularly audit AI-generated code for ethical considerations, ensuring that it adheres to inclusive design principles and avoids perpetuating biases.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Design for adaptability, ensuring that it can integrate seamlessly into various development environments, frameworks, and evolving technology stacks.",
    "left",
    25
  );





  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the anticipated impact and strategic value of investing in this, an AI-powered code generation and assistance tool. The project is expected to drive significant productivity improvements for development teams, reduce time-to-market, and foster innovation by providing smart, context-aware coding suggestions.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "By integrating this tool into the development workflow, organizations can expect enhanced code quality, streamlined development processes, and reduced manual errors. This aligns with the broader organizational goals of improving efficiency, accelerating software delivery, and boosting overall developer satisfaction.",
    "left"
  );


  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/usecase-prioritization-updated-report-marketsegmenter", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
      "MarketSegmenter utilizes advanced AI methodologies to empower the real estate marketing sector with precise customer segmentation. By analyzing customer demographics, behavior data, and transaction history, it identifies distinct customer groups through K-Means clustering. This model enables targeted marketing campaigns, enhancing the effectiveness of outreach efforts while improving overall marketing efficiency."
      , 'left'
  );

  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Launch Announcement', 'Introduction of MarketSegmenter, an AI-powered platform designed to deliver precise customer segmentation insights for the real estate marketing sector.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Product Launch', 'MarketSegmenter identifies distinct customer groups using K-Means clustering, empowering real estate marketers to create targeted and effective campaigns.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Purpose', 'Enhance marketing effectiveness and ROI by segmenting customers based on demographics, behavior data, and transaction history to tailor campaigns.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Talent Amplification', 'Empower marketing teams with AI-driven insights to improve decision-making, optimize strategies, and increase overall campaign success.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]    
    },
    {
      row: ['Key Customer Benefits', 'Improved segmentation accuracy, Enhanced campaign effectiveness, Increased customer engagement'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)] 
    },
    {
      row: ['Human In the Loop', 'Designed to augment marketers by highlighting segment-specific opportunities and risks, enabling smarter decision-making and more precise targeting.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Intended Audience', 'Primarily for marketing teams in the real estate sector. The platform assists internal teams to refine their marketing strategies based on data-driven insights.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Limitations of Offering', 'Insights are based on historical and behavioral data, which may require periodic updates. Additional validations may be needed for highly dynamic markets.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Role Complexity', 'Addresses the complexities of customer segmentation by analyzing diverse data points such as demographics, transaction history, and behaviors, simplifying the targeting process.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Customer Challenges', 'Marketers face challenges such as: Understanding diverse customer behaviors, Adapting to regional market differences, Aligning segmentation with campaign goals.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Identifying Customer Needs', 'Feedback from marketing teams highlighted the need for accurate segmentation tools to drive personalized campaigns and improve customer retention.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Data Challenges', 'Data sources are often fragmented across systems, such as CRM, transaction logs, and external demographic databases, making unified analysis a challenge.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Future Tools', 'Proposed tools for enhancement: Real-time customer behavior tracking, Predictive models for customer lifetime value, Integration with ad platforms for automated campaign deployment.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Non Functional Requirements', 'High Availability, Scalable infrastructure, Regular data updates, Intuitive interface requiring minimal training.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Automation) to Level 3 (Fully AI-Driven Automation).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No automation; customer inquiries handled entirely manually, leading to high response times and inconsistent service.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; capable of handling complex inquiries independently, offering real-time responses and improving customer experience.",
    "left",
    6
  );

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");
  pdfService.setCurrentY(3);

  const tcoTableData = [
    {
        row: ['Cost Factor', 'TotalCost ($)'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0.125, 0.376),rgb(0, 0.125, 0.376)]
    },
    {
        row: ['People Factor','$ 165,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Operations Factor','$ 227,500'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Technology Factor','$ 250,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
        row: ['Infrastructure Factor','$ 170,000'],
        color: [rgb(0,0,0),rgb(0,0,0)],
        bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 95,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 57,500'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 965,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  // const tableData = [
  //   {
  //     row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   // {
  //   //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
  //   //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //   //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   // }
  // ];

  // pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/roi-table-marketsegmenter.png',150, 0.6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("ROI Graph",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/roi-graph-marketsegmenter.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a low-level architecture will be provided for the selected use case, which the Leading Supply Chain Company can implement to create the model.",
    "left"
  );
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap-updated1.png",160,0.9);
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures that the organization has implemented across its AI initiatives. In AI Enterprise Governance, they have established a Data Governance Policy to ensure responsible handling of data and created AI Risk Committees to oversee and manage AI-related risks.",
    "left",
    6
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations that are actively applied in the organization’s AI architecture. In AI Data Pipelines, the organization leverages knowledge graphs and taxonomy databases to structure and reason over data, improving data organization and insights. ",
    "left",
    6
  );
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage('./assets/market-segmenter.png',250,0.6);
  pdfService.setCurrentY(10);
  
  // pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  // pdfService.setCurrYTop(260);
  // pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  // await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  // pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("3. Maturity level 2","left",15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  // pdfService.setCurrYTop(320);
  // pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 introduces fully AI-driven automation, significantly enhancing efficiency and reducing manual intervention.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth post-break-even demonstrates the project's financial viability.",
    "left",
    6
  );
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);

  // Users Section
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The targeted user groups include marketing professionals and organizations aiming to enhance their customer segmentation and campaign effectiveness. The identified users are:",
    "left", 15
  );
  pdfService.drawWrappedText(
    "• Marketing Teams: ~50 users utilizing the tool for identifying customer segments, tailoring marketing strategies, and optimizing campaign effectiveness.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Sales Teams: ~30 users leveraging the insights from segmentation to identify high-value customers and prioritize leads for conversion.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Data Analysts: ~20 users using the segmentation data to analyze customer behavior trends and inform broader business strategies.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Strategy Planners: ~15 users benefiting from AI-driven insights to forecast market opportunities and develop long-term strategies.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from more precise targeting, improved marketing ROI, and actionable customer insights, all while maintaining control through human-in-the-loop (HITL) processes.",
    "left", 15
  );
  pdfService.setCurrentY(10);


  // Territories Section
  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For this, the deployment will initially target regions with a strong real estate market and high marketing activity.",
    "left", 15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States, Canada, and Europe, focusing on metropolitan areas with significant real estate transactions and customer diversity.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In future phases, this may expand to Asia and Australia, particularly regions with growing real estate markets and increasing demand for targeted marketing tools.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: The tool will adhere to regional data privacy regulations, including GDPR (for Europe), CCPA (for the U.S.), and other relevant standards.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: The tool will accommodate language preferences and regional marketing practices, ensuring better integration and enhancing campaign effectiveness in each target region.",
    "left", 25
  );
  pdfService.setCurrentY(10);


  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Accuracy Risk: Errors in AI-driven property recommendations or incomplete analysis may lead to misinformed decisions, affecting campaign performance and client trust.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Excessive dependence on automated insights without thorough validation could lead to overlooked market trends or biased strategies, particularly in niche real estate sectors.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Security and Privacy Risk: Handling sensitive customer and property data poses privacy concerns, especially in regions with stringent data protection laws like GDPR or CCPA. Robust safeguards and compliance measures are critical.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Ethical Bias: AI-generated marketing strategies may inadvertently favor certain demographics or perpetuate discriminatory practices, highlighting the need for fair and unbiased data inputs.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Integration and Compatibility Challenges: While this provides valuable market insights, it may not seamlessly integrate with all CRM tools or platforms, requiring additional configuration or adjustments.",
    "left",
    25
  );



  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Conduct thorough validation checks to ensure AI-generated property insights are accurate, relevant, and aligned with market trends.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Incorporate a Human-in-the-Loop (HITL) process to allow marketing teams to review and refine AI-generated strategies, ensuring they meet campaign objectives and client expectations.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Implement stringent data security measures and adhere to privacy regulations like GDPR and CCPA to safeguard sensitive customer and property information.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct periodic audits of AI-driven recommendations to identify and eliminate potential biases, promoting fairness and inclusivity in generated marketing strategies.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Ensure compatibility with diverse CRM tools and platforms, allowing seamless integration and adaptability to evolving market and technological requirements.",
    "left",
    25
  );






  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment underscores the transformative potential and strategic importance of MarketSegmenter, an AI-driven property insights tool. The initiative is anticipated to enhance marketing efficiency, drive targeted campaigns, and unlock new opportunities in property management by delivering precise, data-backed insights.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "By integrating this tool into the development workflow, organizations can expect enhanced code quality, streamlined development processes, and reduced manual errors. This aligns with the broader organizational goals of improving efficiency, accelerating software delivery, and boosting overall developer satisfaction.",
    "left"
  );


  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/updated-updated-model-card-report-marketsegmenter", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. AI Bill of Materials(AI-BOM)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Compliance and Governance','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Recommendations and Next Steps','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "MarketSegmenter is a cutting-edge generative AI solution designed for property insights and targeted marketing. By leveraging advanced machine learning algorithms, it processes vast datasets to deliver actionable insights, enabling property managers to identify potential market segments effectively. This tool simplifies the decision-making process, providing data-driven recommendations that enhance marketing campaigns and operational efficiency. Its integration of AI capabilities ensures accuracy, scalability, and compliance, making it an invaluable asset for organizations seeking to maximize their property management and marketing strategies.",
    "left",
    6
  );

  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. AI Bill Of Materials (AI-BOM)", 'left');
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("i. Model Details", "left", 6);
  pdfService.setCurrentY(3);

  const tableDataAIBOM1 = [
      {
        row: ['Field', 'Description'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
      },
      {
        row: ['Name', 'MarketSegmenter AI'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Model Usage', 'Analyze property data and customer behavior to identify potential market segments and generate targeted marketing strategies'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Department', 'Property Management and Marketing'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Platform', 'GenAI Platforms (Custom AI Models)'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Version', '1.0'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Type', 'Generative AI'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Licenses', 'Proprietary MarketSegmenter License'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Libraries', 'Pandas, NumPy, Scikit-learn, Custom AI SDKs'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['AI Platform and Services', 'Custom AI Models, Cloud services - AWS Lambda, GCP Functions'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Customer Homogeneity', 'Grouping property customers by common traits, preferences, or behavior for targeted engagement strategies'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Market Trends Analysis', 'Identify emerging trends in the property market for predictive marketing and investment decisions'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },    
      {
        row: ['Frequency of Use', 'Daily'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: ['Overall Impact of Potential Error', 'High (Inaccurate segmentation may result in misaligned marketing campaigns, impacting revenue)'],
        color: [rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
      }
  ];

  
  pdfService.renderTable(tableDataAIBOM1, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("ii. Model Architecture", 'left', 6);
  pdfService.setCurrentY(3);

  const modelArchDetails = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Architecture', 'Advanced Transformer-based Language Model'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Architecture Family', 'GPT Series (Generative Pre-trained Transformer)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Input', 'Accepts structured natural language queries, API calls, or JSON-formatted prompts'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Output', 'Generates executable code snippets, contextual explanations, and debugging recommendations in JSON or API response formats'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Hardware', 'Optimized for NVIDIA A100 GPUs during training; supports scalable CPU/GPU environments for inference'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software', 'Containerized using Docker with Python-based runtime environment'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software Required for Execution', 'Includes essential runtime libraries and dependencies prepackaged in the container'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(modelArchDetails, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("iii. Pre-processed Model Input",'left',6);
  // const preProcessedModelInput = [
  //   {
  //     row: ['Region Name','Document Date','Product Group Level-1','Product Group Level-2','Total sales(in $)','Phase'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['West', '11-07-2023', 'Lumber', 'Lumber-Dimensional', '$ 2462.35', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '01-10-2024', 'Lumber', 'Lumber-Dimensional', '$ 2509.31', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '26-03-2024', 'Lumber', 'Lumber-Dimensional', '$ 1204.00', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '27-02-2023', 'Lumber', 'Lumber-Dimensional', '$ 492.53', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Northeast', '07-12-2023', 'Millwork', 'Millwork-Doors', '$ 0.0', 'Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(preProcessedModelInput, [70,80,60,120,80,80]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("iv. Clustered Model Input",'left',6);
  // const clusteredModelInput = [
  //   {
  //     row: ['Region Name','Total Sales(in $)','Average Monthly Orders Qty','Unique Jobs','Days since Last Purchase','Purchase Interval','Phase'],
  //     color: [rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South Central', '18291.57', '6.16', '1', '56', '6.4','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '972513.25', '31.17', '175', '46', '2.04','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '26989426.46', '604.08', '64', '46', '1.40','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '28480921.12', '895', '3598', '46', '1.44','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '306781.57', '8.14', '13', '46', '1794.04','Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelInput, [70,80,70,70,70,70,70]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("v. Model Output",'left',6);
  
  // const clusteredModelOutput = [
  //   {
  //     row: ['Region Name','Cluster ID','Antecedent','Consequent','Rec Confidence','Rec Leverage'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners- Anchors', '0.5101', '1.5653'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners-Nuts, Bolts, & Washers', '0.4409', '1.3252'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts, & Washers', '0.5014', '1.4863'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners- Anchors', '0.4738', '1.4753'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts and Washers', '0.4185', '1.2742'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelOutput, [70,60,140,90,70,70]);
  // pdfService.setCurrentY(20);
  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);
  // pdfService.setCurrentY(25);


  
  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);

  pdfService.drawSubHeader("iii. Software", 'left', 6);
  pdfService.setCurrentY(3);

  const softwareInfo = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Market Segmentation Algorithm', 'AWS SageMaker', 'Used for training models to identify customer segments based on purchasing behavior.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Transaction Data', 'Internal Database', 'Historical purchase data used to train segmentation models.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Profile Data', 'CRM System (Salesforce)', 'Data about customer demographics and preferences to enhance segmentation accuracy.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Segmentation Visualization Dashboard', 'Power BI', 'Used for visualizing the customer segments and providing actionable insights for marketing teams.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(softwareInfo, [140, 190, 140]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("iv. Usage - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const usageDatatable = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Customer Segmentation Model', 'AWS SageMaker', 'Segmentation model trains on historical transaction data and customer profiles to identify key customer groups.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Market Segmentation Insights', 'Power BI', 'Dashboard visualizes customer segments and provides actionable insights to tailor marketing strategies.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Purchase History Data', 'Internal Database', 'Historical transaction data provides insights into customer behavior and supports segmentation model training.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Demographics Data', 'CRM System (Salesforce)', 'Customer demographic data is used to refine segmentation models and personalize marketing efforts.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(usageDatatable, [150, 150,150]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("v. Considerations - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const considerationDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Environmental Impact', 'Training customer segmentation models using historical data requires computational resources, which contribute to carbon emissions.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Ethical Considerations', 'Risk of unintentional biases in customer data, especially demographic and purchase data, leading to skewed segmentation results.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Data Security', 'Sensitive customer data must be protected during processing and analysis, ensuring compliance with privacy regulations such as GDPR.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['System Scalability', 'The system should scale to handle larger customer datasets and accommodate growing needs for segmentation analysis over time.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Explainability', 'The segmentation models must provide transparent and understandable insights to help marketing teams justify their strategies.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(considerationDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Department','Planning and Forecasting'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Frequency of Use', 'Daily'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("3. Model Details", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawSubHeader("Model Input",'left',6);
  // const modelInputs = [
  //   {
  //     row: ['yearmonth','year','month','location','sales(in $)','qty'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   // {
  //   //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  //   // {
  //   //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("Model Output",'left',6);
  
  // const tableOutputData = [
  //   {
  //     row: ['Output Field','Description'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
  //   },
  //   {
  //     row: ['unique_id',	'Anonymized identifier for location and SKU'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   },
  //   {
  //     row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['location',	'Anonymized location identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['sku',	'Anonymized SKU identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['division',	'Division'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['region',	'Region'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg1',	'Product hierarchy level 1'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg2',	'Product hierarchy level 2'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg3',	'Product hierarchy level 3'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['predicted_quantity',	'Predicted quantity for the given month'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   }
  // ];

  // pdfService.renderTable(tableOutputData, [150,300]);
  // pdfService.setCurrentY(10);

  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);

  // pdfService.setCurrentY(20);
  // pdfService.drawSubHeader('Model Paramaeters','left',6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  // pdfService.drawWrappedText("• Market Trends",'left',16);
  // pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  // pdfService.drawWrappedText("• Promotions",'left',16);
  // pdfService.drawWrappedText("• Economic Indicators",'left',16);
  // pdfService.drawWrappedText(
  //   "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Purpose: Provide accurate demand predictions for planning decisions",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  // pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  // pdfService.drawWrappedText('• Features Engineered:','left',30);
  // pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  // pdfService.drawWrappedText('• Trend Components','left',45);
  // pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  // pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  // pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  // pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  // pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("4. Technical Details", "left");
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Model Link: ",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
  //   "left",
  //   6,
  // );
  // // pdfService.drawWrappedText(
  // //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  // //   "left",
  // //   6
  // // );
  // // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // // const linkY = pdfService.currentY;
  // // const linkAnnotation = {
  // //   Type: 'Annot',
  // //   Subtype: 'Link',
  // //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  // //   Border: [0, 0, 0], // Optional border
  // //   A: {
  // //     Type: 'Action',
  // //     S: 'URI',
  // //     URI: 'https://www.openai.com', // Your desired link
  // //   },
  // // };
  // // const fontSize = 12;
  // // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // // Measure text width
  // // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // // Draw the text
  // // const x = 50; // Starting x-coordinate
  // // const y = 300; // Starting y-coordinate
  // // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  // //   x: x,
  // //   y: y,
  // //   size: fontSize,
  // //   font: pdfService.font,
  // //   color: rgb(0, 0, 0),
  // // });
  // pdfService.drawWrappedText(
  //   "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  // await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  // pdfService.setCurrYTop(120);
  // await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  // pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/market-segment-graph1.png',160,0.5);
  pdfService.setCurrYTop(160);
  await pdfService.addLocalImage('./assets/market-segment-graph2.png',160,0.5, 300);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/market-segment-graph3.png',160,0.6, 180);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Noticing Figure-1, This comparison highlights the trade-off between the accuracy of the segmentation model and its response time. As the accuracy of the model improves, it may result in slower response times, making it important to find a balance that delivers both high-quality segmentation and fast processing times for an optimal user experience.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• In the Figure-2, This comparison shows the positive correlation between the improvements in the segmentation model and increasing user engagement and feedback. As the model gets better at segmenting users based on their preferences and behaviors, user satisfaction increases, indicating that the model’s changes are successfully aligning with user expectations.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Comparing Figure-3, This comparison examines how the growth in the number of users impacts the overall market effectiveness and targeted marketing efforts. While a larger user base can lead to better market reach, it’s important to consider other factors (like marketing strategies or external conditions) to determine if the increase in effectiveness is directly due to user growth or influenced by additional factors.",'left',6);
  pdfService.setCurrentY(3);
  // pdfService.drawSubHeader('1. Demand Prediction','left',15);
  // pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('2. Forecast Variability','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Error Metrics','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  // pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The MarketSegmenter model adheres to Fusefy's AI governance standards, ensuring compliance with industry-specific regulations for segmentation and targeting. Responsible AI practices are incorporated to ensure that the model's segmentation results are unbiased and ethically sound. Regular evaluations and audits are conducted to validate the model's reliability, accuracy, and compliance with data protection laws.",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Improve the MarketSegmenter model by incorporating more advanced segmentation algorithms to enhance target market identification and improve segmentation accuracy.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Integrate MarketSegmenter with customer relationship management (CRM) systems to enable seamless data flow and better customer segmentation insights for marketing teams.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Continuously update the training dataset with new demographic, behavioral, and transactional data to maintain the relevance and effectiveness of the segmentation model.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Expand the model's segmentation capabilities to include predictive analytics, allowing the identification of high-value customers and potential market shifts.",
    "left",
    6
  );

  pdfService.setCurrentY(20);


  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for MarketSegmenter','left',6);

  const tableData = [
      {
        row: ['No', 'Finding Title', 'Description', 'Impact', 'Recommendation'],
        color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
        bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
      },
      {
        row: [
          '1', 
          'Inaccurate Customer Segmentation', 
          'MarketSegmenter may misclassify customers due to insufficient or biased data, leading to inaccurate segmentation results.',
          'Incorrect segmentation can lead to misguided marketing campaigns, ineffective targeting, and missed revenue opportunities.',
          'Improve the model’s ability to analyze a more diverse dataset, ensuring that it accounts for all relevant customer characteristics for better segmentation.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '2', 
          'Limited Adaptability to Changing Market Trends', 
          'The model may struggle to adapt to dynamic market conditions or shifts in customer behavior, leading to outdated segmentation results.',
          'Failure to adjust to market trends can result in ineffective marketing strategies and missed opportunities as customer needs evolve.',
          'Enhance the model’s capability to incorporate real-time data and continuously update segmentation as market conditions change.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '3', 
          'Bias in Segmentation Based on Demographic Data', 
          'MarketSegmenter may inadvertently incorporate biases related to age, gender, or location, leading to unfair or unbalanced segmentation.',
          'Biases in segmentation can alienate certain customer groups and result in inequitable marketing efforts that fail to reach diverse audiences.',
          'Introduce fairness algorithms to detect and mitigate biases in demographic-based segmentation, ensuring equitable treatment for all customer groups.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      },
      {
        row: [
          '4', 
          'Overfitting to Historical Data', 
          'The model may overfit to historical data and fail to generalize to new, unseen customer data, resulting in poor segmentation for new markets.',
          'Overfitting reduces the model’s ability to scale effectively, limiting its usefulness for future customer segmentation and market penetration.',
          'Apply techniques such as cross-validation and regularization to reduce overfitting, and ensure the model generalizes well to new data.'
        ],
        color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
        bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
      }
  ];



  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});


app.get("/updated-updated-model-card-report-tenantretentionAI", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. AI Bill of Materials(AI-BOM)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Compliance and Governance','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Recommendations and Next Steps','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "TenantRetentionAI is an innovative AI-driven solution designed to predict tenant retention likelihood and identify at-risk tenants. By utilizing advanced ensemble classification algorithms, it processes diverse datasets, including maintenance records, lease documents, tenant surveys, and online reviews, to deliver retention probability scores and actionable insights. This tool empowers property managers with data-driven strategies, enabling timely interventions to reduce vacancy rates and enhance revenue stability. With seamless integration into platforms like Azure ML and PowerBI, TenantRetentionAI ensures scalability, accuracy, and continuous improvement, making it a vital resource for optimizing tenant retention and property management efficiency.",
    "left",
    6
);

  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. AI Bill Of Materials (AI-BOM)", 'left');
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("i. Model Details", "left", 6);
  pdfService.setCurrentY(3);

  const tableDataAIBOM1 = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Name', 'TenantRetentionAI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Usage', 'Predict tenant retention likelihood and identify at-risk tenants based on maintenance records, lease documents, and tenant surveys'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Department', 'Property Management'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Platform', 'Azure ML Services, Azure Synapse, PowerBI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Version', '1.0'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Type', 'Predictive AI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Licenses', 'Proprietary TenantRetentionAI License'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Libraries', 'Pandas, NumPy, Scikit-learn, Azure ML SDK'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['AI Platform and Services', 'Azure ML Services, PowerBI, Azure Synapse Analytics'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant Risk Analysis', 'Identifying tenants at risk of leaving by analyzing maintenance requests, lease renewal history, and payment patterns'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Retention Prediction', 'Predict tenant retention likelihood and suggest interventions to improve retention rates'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Frequency of Use', 'Daily/Weekly'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Inaccurate predictions may result in higher vacancy rates and revenue loss)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  

  
  pdfService.renderTable(tableDataAIBOM1, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("ii. Model Architecture", 'left', 6);
  pdfService.setCurrentY(3);

  const modelArchDetails = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Architecture', 'Advanced Transformer-based Language Model'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Architecture Family', 'GPT Series (Generative Pre-trained Transformer)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Input', 'Accepts structured natural language queries, API calls, or JSON-formatted prompts'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Output', 'Generates executable code snippets, contextual explanations, and debugging recommendations in JSON or API response formats'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Hardware', 'Optimized for NVIDIA A100 GPUs during training; supports scalable CPU/GPU environments for inference'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software', 'Containerized using Docker with Python-based runtime environment'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software Required for Execution', 'Includes essential runtime libraries and dependencies prepackaged in the container'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(modelArchDetails, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("iii. Pre-processed Model Input",'left',6);
  // const preProcessedModelInput = [
  //   {
  //     row: ['Region Name','Document Date','Product Group Level-1','Product Group Level-2','Total sales(in $)','Phase'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['West', '11-07-2023', 'Lumber', 'Lumber-Dimensional', '$ 2462.35', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '01-10-2024', 'Lumber', 'Lumber-Dimensional', '$ 2509.31', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '26-03-2024', 'Lumber', 'Lumber-Dimensional', '$ 1204.00', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '27-02-2023', 'Lumber', 'Lumber-Dimensional', '$ 492.53', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Northeast', '07-12-2023', 'Millwork', 'Millwork-Doors', '$ 0.0', 'Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(preProcessedModelInput, [70,80,60,120,80,80]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("iv. Clustered Model Input",'left',6);
  // const clusteredModelInput = [
  //   {
  //     row: ['Region Name','Total Sales(in $)','Average Monthly Orders Qty','Unique Jobs','Days since Last Purchase','Purchase Interval','Phase'],
  //     color: [rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South Central', '18291.57', '6.16', '1', '56', '6.4','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '972513.25', '31.17', '175', '46', '2.04','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '26989426.46', '604.08', '64', '46', '1.40','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '28480921.12', '895', '3598', '46', '1.44','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '306781.57', '8.14', '13', '46', '1794.04','Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelInput, [70,80,70,70,70,70,70]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("v. Model Output",'left',6);
  
  // const clusteredModelOutput = [
  //   {
  //     row: ['Region Name','Cluster ID','Antecedent','Consequent','Rec Confidence','Rec Leverage'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners- Anchors', '0.5101', '1.5653'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners-Nuts, Bolts, & Washers', '0.4409', '1.3252'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts, & Washers', '0.5014', '1.4863'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners- Anchors', '0.4738', '1.4753'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts and Washers', '0.4185', '1.2742'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelOutput, [70,60,140,90,70,70]);
  // pdfService.setCurrentY(20);
  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);
  // pdfService.setCurrentY(25);


  
  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);

  pdfService.drawSubHeader("iii. Software", 'left', 6);
  pdfService.setCurrentY(3);

  const softwareInfo = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['TenantRetentionAI Model', 'Azure ML Services', 'Used for predicting tenant retention likelihood and identifying at-risk tenants based on historical and survey data.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant Data', 'Property Management System (PMS)', 'Historical tenant data, including lease documents, maintenance records, and payment history, used to train the retention prediction model.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant Survey Data', 'Survey Tools (e.g., Qualtrics)', 'Data from tenant satisfaction surveys used to improve model accuracy and predict potential tenant churn.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Retention Prediction Dashboard', 'Power BI', 'Used to visualize tenant retention predictions and risk factors, providing actionable insights for property managers to intervene.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
];

  
  pdfService.renderTable(softwareInfo, [140, 190, 140]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("iv. Usage - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const usageDatatable = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Tenant Retention Model', 'Azure ML Services', 'Predicts tenant retention likelihood and identifies at-risk tenants using maintenance records, lease documents, and tenant surveys.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant Retention Insights', 'Power BI', 'Dashboard visualizes tenant retention predictions, highlighting at-risk tenants and providing actionable insights for intervention.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant History Data', 'Property Management System (PMS)', 'Historical data on tenant behavior, including payment history, lease renewals, and maintenance requests, used to train the model.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Tenant Survey Data', 'Survey Tools (e.g., Qualtrics)', 'Survey responses provide tenant satisfaction insights, enhancing model accuracy and improving retention predictions.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
];

  
  pdfService.renderTable(usageDatatable, [150, 150,150]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("v. Considerations - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const considerationDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Environmental Impact', 'Training customer segmentation models using historical data requires computational resources, which contribute to carbon emissions.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Ethical Considerations', 'Risk of unintentional biases in customer data, especially demographic and purchase data, leading to skewed segmentation results.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Data Security', 'Sensitive customer data must be protected during processing and analysis, ensuring compliance with privacy regulations such as GDPR.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['System Scalability', 'The system should scale to handle larger customer datasets and accommodate growing needs for segmentation analysis over time.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Explainability', 'The segmentation models must provide transparent and understandable insights to help marketing teams justify their strategies.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];

  
  pdfService.renderTable(considerationDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Department','Planning and Forecasting'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Frequency of Use', 'Daily'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("3. Model Details", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawSubHeader("Model Input",'left',6);
  // const modelInputs = [
  //   {
  //     row: ['yearmonth','year','month','location','sales(in $)','qty'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   // {
  //   //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  //   // {
  //   //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("Model Output",'left',6);
  
  // const tableOutputData = [
  //   {
  //     row: ['Output Field','Description'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
  //   },
  //   {
  //     row: ['unique_id',	'Anonymized identifier for location and SKU'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   },
  //   {
  //     row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['location',	'Anonymized location identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['sku',	'Anonymized SKU identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['division',	'Division'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['region',	'Region'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg1',	'Product hierarchy level 1'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg2',	'Product hierarchy level 2'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg3',	'Product hierarchy level 3'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['predicted_quantity',	'Predicted quantity for the given month'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   }
  // ];

  // pdfService.renderTable(tableOutputData, [150,300]);
  // pdfService.setCurrentY(10);

  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);

  // pdfService.setCurrentY(20);
  // pdfService.drawSubHeader('Model Paramaeters','left',6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  // pdfService.drawWrappedText("• Market Trends",'left',16);
  // pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  // pdfService.drawWrappedText("• Promotions",'left',16);
  // pdfService.drawWrappedText("• Economic Indicators",'left',16);
  // pdfService.drawWrappedText(
  //   "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Purpose: Provide accurate demand predictions for planning decisions",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  // pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  // pdfService.drawWrappedText('• Features Engineered:','left',30);
  // pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  // pdfService.drawWrappedText('• Trend Components','left',45);
  // pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  // pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  // pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  // pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  // pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("4. Technical Details", "left");
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Model Link: ",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
  //   "left",
  //   6,
  // );
  // // pdfService.drawWrappedText(
  // //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  // //   "left",
  // //   6
  // // );
  // // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // // const linkY = pdfService.currentY;
  // // const linkAnnotation = {
  // //   Type: 'Annot',
  // //   Subtype: 'Link',
  // //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  // //   Border: [0, 0, 0], // Optional border
  // //   A: {
  // //     Type: 'Action',
  // //     S: 'URI',
  // //     URI: 'https://www.openai.com', // Your desired link
  // //   },
  // // };
  // // const fontSize = 12;
  // // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // // Measure text width
  // // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // // Draw the text
  // // const x = 50; // Starting x-coordinate
  // // const y = 300; // Starting y-coordinate
  // // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  // //   x: x,
  // //   y: y,
  // //   size: fontSize,
  // //   font: pdfService.font,
  // //   color: rgb(0, 0, 0),
  // // });
  // pdfService.drawWrappedText(
  //   "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  // await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  // pdfService.setCurrYTop(120);
  // await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  // pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/market-segment-graph1.png',160,0.5);
  pdfService.setCurrYTop(160);
  await pdfService.addLocalImage('./assets/market-segment-graph2.png',160,0.5, 300);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/market-segment-graph3.png',160,0.6, 180);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Noticing Figure-1, This comparison highlights the trade-off between the accuracy of the segmentation model and its response time. As the accuracy of the model improves, it may result in slower response times, making it important to find a balance that delivers both high-quality segmentation and fast processing times for an optimal user experience.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• In the Figure-2, This comparison shows the positive correlation between the improvements in the segmentation model and increasing user engagement and feedback. As the model gets better at segmenting users based on their preferences and behaviors, user satisfaction increases, indicating that the model’s changes are successfully aligning with user expectations.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Comparing Figure-3, This comparison examines how the growth in the number of users impacts the overall market effectiveness and targeted marketing efforts. While a larger user base can lead to better market reach, it’s important to consider other factors (like marketing strategies or external conditions) to determine if the increase in effectiveness is directly due to user growth or influenced by additional factors.",'left',6);
  pdfService.setCurrentY(3);
  // pdfService.drawSubHeader('1. Demand Prediction','left',15);
  // pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('2. Forecast Variability','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Error Metrics','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  // pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The TenantRetentionAI model adheres to industry-standard AI governance practices, ensuring compliance with data protection regulations and ethical considerations. Responsible AI principles are embedded to maintain unbiased and accurate predictions of tenant retention likelihood. Regular evaluations and audits are performed to validate the model's reliability, precision, and alignment with tenant privacy and property management standards.",
    "left",
    6
);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance the TenantRetentionAI model by exploring advanced ensemble classification techniques to improve the accuracy of retention predictions and better identify at-risk tenants.",
    "left",
    6
);
pdfService.drawWrappedText(
  "• Integrate TenantRetentionAI with property management systems (PMS) to enable seamless data flow and provide property managers with more accurate retention insights for proactive tenant engagement.",
  "left",
  6
);
pdfService.drawWrappedText(
  "• Continuously update the training dataset with new tenant demographic, maintenance, lease, and survey data to ensure the relevance and accuracy of the tenant retention prediction model.",
  "left",
  6
);
pdfService.drawWrappedText(
  "• Expand the TenantRetentionAI model's capabilities to include predictive analytics, enabling the identification of high-risk tenants and potential shifts in tenant behavior for proactive retention strategies.",
  "left",
  6
);

  pdfService.setCurrentY(20);


  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for MarketSegmenter','left',6);

  const tableData = [
    {
      row: ['No', 'Finding Title', 'Description', 'Impact', 'Recommendation'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: [
        '1', 
        'Inaccurate Tenant Retention Predictions', 
        'TenantRetentionAI may misclassify tenants at risk of leaving due to insufficient or biased data, leading to inaccurate predictions.',
        'Incorrect predictions can result in missed opportunities to retain tenants, leading to increased vacancy rates and lost revenue.',
        'Improve the model’s ability to analyze a more diverse dataset, ensuring it accounts for all tenant characteristics (e.g., payment history, satisfaction surveys) to improve retention predictions.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '2', 
        'Limited Adaptability to Changing Tenant Behavior', 
        'The model may struggle to adapt to evolving tenant needs or shifts in behavior, leading to outdated retention strategies.',
        'Failure to adjust to changing tenant behavior can result in ineffective retention efforts and increased tenant turnover.',
        'Enhance the model’s capability to incorporate real-time data, such as tenant feedback and behavior trends, to continuously update retention predictions.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '3', 
        'Bias in Retention Predictions', 
        'TenantRetentionAI may inadvertently incorporate biases based on demographic or payment history data, leading to unfair or inaccurate predictions.',
        'Biases in predictions can alienate certain tenant groups and lead to inequitable retention strategies that fail to reach diverse populations.',
        'Introduce fairness algorithms to detect and mitigate biases in demographic or payment-based predictions, ensuring equitable retention strategies for all tenants.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '4', 
        'Overfitting to Historical Tenant Data', 
        'The model may overfit to historical data and fail to generalize to new tenants, leading to poor retention predictions for new or first-time tenants.',
        'Overfitting reduces the model’s ability to adapt to new tenant behaviors, resulting in ineffective retention strategies for future tenants.',
        'Apply techniques such as cross-validation and regularization to reduce overfitting, ensuring the model generalizes well to new tenant data and scenarios.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
];


  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/updated-updated-model-card-report-rentalpricingpredictionAI", async (req, res) => {
  await pdfService.init();
  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Model Card Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300],);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Executive Summary/Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. AI Bill of Materials(AI-BOM)','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Model Performance and Impact Assessment','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. Compliance and Governance','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Recommendations and Next Steps','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(390);

  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

  pdfService.drawHeading("1. Executive Summary/Introduction", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "Dynamic Rental Pricing (AI) is an innovative, data-driven solution designed to optimize rental unit pricing through advanced machine learning techniques. By analyzing diverse datasets, including property details, unit specifications, and local market trends, this tool provides accurate, real-time pricing predictions. It enables pricing teams to make informed decisions, ensuring competitive and optimized rental rates. Focused on scalability, precision, and market adaptability, Dynamic Rental Pricing (AI) empowers property managers to maximize revenue, improve occupancy rates, and stay ahead in a rapidly evolving real estate market.",
    "left",
    6
);

  pdfService.setCurrentY(20);

  pdfService.drawHeading("2. AI Bill Of Materials (AI-BOM)", 'left');
  pdfService.setCurrentY(3);

  pdfService.drawSubHeader("i. Model Details", "left", 6);
  pdfService.setCurrentY(3);

  const tableDataAIBOM1 = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Name', 'Dynamic Rental Pricing (AI)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Usage', 'Predict rental unit prices based on property details, market data, and unit specifications. Optimize pricing strategies for maximum revenue and occupancy rates.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Department', 'Property Management'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Platform', 'Azure ML Services, Azure Synapse, PowerBI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Version', '1.0'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Type', 'Predictive AI'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Licenses', 'Proprietary DynamicRentalPricingAI License'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Libraries', 'Pandas, NumPy, Scikit-learn, Azure ML SDK'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['AI Platform and Services', 'Azure ML Services, PowerBI, Azure Synapse Analytics'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Pricing Prediction', 'Predict optimal rental prices for different unit types, considering property details, market conditions, and historical data.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Price Optimization', 'Recommend price adjustments based on occupancy rates, market trends, and competitor pricing to maximize revenue.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Frequency of Use', 'Daily/Weekly'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Overall Impact of Potential Error', 'High (Inaccurate pricing predictions may lead to lost revenue, decreased occupancy, and competitive disadvantage)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  

  
  pdfService.renderTable(tableDataAIBOM1, [150, 320]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("ii. Model Architecture", 'left', 6);
  pdfService.setCurrentY(3);

  const modelArchDetails = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Architecture', 'Ensemble Regression Model (e.g., Gradient Boosting, Random Forest)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Architecture Family', 'Ensemble Learning (Bagging, Boosting, Stacking)'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Input', 'Structured property details, unit specifications, market data, and historical pricing information'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Output', 'Predicted rental prices for unit types, price optimization recommendations'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Hardware', 'Optimized for cloud-based environments with scalable CPU/GPU resources for model training and inference'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software', 'Containerized using Docker with Python-based runtime environment for model execution and data processing'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Software Required for Execution', 'Includes libraries like Pandas, NumPy, Scikit-learn, and Azure ML SDK, along with necessary data processing tools'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  

  
  pdfService.renderTable(modelArchDetails, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("iii. Pre-processed Model Input",'left',6);
  // const preProcessedModelInput = [
  //   {
  //     row: ['Region Name','Document Date','Product Group Level-1','Product Group Level-2','Total sales(in $)','Phase'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['West', '11-07-2023', 'Lumber', 'Lumber-Dimensional', '$ 2462.35', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '01-10-2024', 'Lumber', 'Lumber-Dimensional', '$ 2509.31', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '26-03-2024', 'Lumber', 'Lumber-Dimensional', '$ 1204.00', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['West', '27-02-2023', 'Lumber', 'Lumber-Dimensional', '$ 492.53', 'Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Northeast', '07-12-2023', 'Millwork', 'Millwork-Doors', '$ 0.0', 'Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(preProcessedModelInput, [70,80,60,120,80,80]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("iv. Clustered Model Input",'left',6);
  // const clusteredModelInput = [
  //   {
  //     row: ['Region Name','Total Sales(in $)','Average Monthly Orders Qty','Unique Jobs','Days since Last Purchase','Purchase Interval','Phase'],
  //     color: [rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South Central', '18291.57', '6.16', '1', '56', '6.4','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '972513.25', '31.17', '175', '46', '2.04','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Midwest', '26989426.46', '604.08', '64', '46', '1.40','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '28480921.12', '895', '3598', '46', '1.44','Structural Frame'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['Southeast', '306781.57', '8.14', '13', '46', '1794.04','Interior Finish'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelInput, [70,80,70,70,70,70,70]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("v. Model Output",'left',6);
  
  // const clusteredModelOutput = [
  //   {
  //     row: ['Region Name','Cluster ID','Antecedent','Consequent','Rec Confidence','Rec Leverage'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners- Anchors', '0.5101', '1.5653'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Lumber-Treated-Treated Boards', 'Fasteners-Nuts, Bolts, & Washers', '0.4409', '1.3252'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts, & Washers', '0.5014', '1.4863'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners- Anchors', '0.4738', '1.4753'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['South East', '1', 'Hardware-Connectors', 'Fasteners-Nuts, Bolts and Washers', '0.4185', '1.2742'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
    
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(clusteredModelOutput, [70,60,140,90,70,70]);
  // pdfService.setCurrentY(20);
  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);
  // pdfService.setCurrentY(25);


  
  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
    
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);

  pdfService.drawSubHeader("iii. Software", 'left', 6);
  pdfService.setCurrentY(3);

  const softwareInfo = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Dynamic Rental Pricing AI Model', 'Azure ML Services', 'Used for predicting rental prices for different unit types based on property details, market data, and historical pricing information.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Property Data', 'Property Management System (PMS)', 'Includes unit details such as size, amenities, and historical pricing, which are used to train the pricing prediction model.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Market Data', 'External Market Data Providers (e.g., Zillow, Redfin)', 'Market trends, competitor pricing, and local economic indicators used to adjust predictions and optimize rental pricing.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Pricing Prediction Dashboard', 'Power BI', 'Used to visualize rental price predictions and optimization recommendations, providing actionable insights for pricing teams.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  

  
  pdfService.renderTable(softwareInfo, [140, 190, 140]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("iv. Usage - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const usageDatatable = [
    {
      row: ['Name', 'Source', 'Usage'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Dynamic Rental Pricing AI Model', 'Azure ML Services', 'Predicts rental prices for different unit types based on property details, market data, and historical pricing information.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Market Data', 'External Market Data Providers (e.g., Zillow, Redfin)', 'Market trends, competitor pricing, and local economic indicators used to adjust predictions and optimize rental pricing.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Property Data', 'Property Management System (PMS)', 'Property details like size, amenities, and historical pricing used to train the rental pricing prediction model.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Pricing Prediction Dashboard', 'Power BI', 'Visualizes rental price predictions and optimization recommendations, providing insights for pricing teams to optimize revenue.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  

  pdfService.renderTable(usageDatatable, [150, 150,150]);
  pdfService.setCurrentY(25);

  pdfService.drawSubHeader("v. Considerations - MarketSegmenter", 'left', 6);
  pdfService.setCurrentY(3);

  const considerationDataTable = [
    {
      row: ['Field', 'Description'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: ['Environmental Impact', 'Training rental pricing models requires substantial computational power, which may contribute to carbon emissions. AI-based pricing systems need to consider energy efficiency.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Ethical Considerations', 'Risk of unintended biases in pricing predictions, such as overpricing or underpricing for certain unit types based on historical or market data.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Data Security', 'Sensitive property data, such as pricing, occupancy, and tenant details, must be securely handled in compliance with data protection laws like GDPR and CCPA.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['System Scalability', 'The system should scale to handle increasing volumes of property and market data, ensuring accurate and timely pricing predictions as demand grows.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Model Explainability', 'The rental pricing model must provide transparent insights into how factors like amenities, location, and market conditions affect pricing decisions, helping property managers justify their pricing strategies.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  
  pdfService.renderTable(considerationDataTable, [150, 320]);
  pdfService.setCurrentY(25);

  // pdfService.drawHeading("2. Model Overview", "left");
  // pdfService.setCurrentY(3);
  // // pdfService.setCurrentY(240);

  // const tableDataRep = [
  //   {
  //     row: ['Model Name','Demand Forecasting Model'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Model Usage','Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Department','Planning and Forecasting'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Platform', 'Python/R/Java Runtimes (TensorFlow)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Frequency of Use', 'Daily'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  //   {
  //     row: ['Overall Impact of Potential Error', 'High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)'],
  //     color: [rgb(0,0,0), rgb(0,0,0)],
  //     bgColor: [rgb(1,1,1), rgb(1,1,1)]
  //   },
  // ];

  // pdfService.renderTable(tableDataRep, [175, 300]);
  // pdfService.setCurrentY(20);
  // pdfService.setCurrentY(240);
  // pdfService.drawWrappedText(
  //   "• Model Name: Demand Forecasting Model",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Department: Planning and Forecasting",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Platform: Python/R/Java Runtimes (TensorFlow)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.drawWrappedText(
  //   "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("3. Model Details", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawSubHeader("Model Input",'left',6);
  // const modelInputs = [
  //   {
  //     row: ['yearmonth','year','month','location','sales(in $)','qty'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5),rgb(0, 0, 0.5),rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['2022-02', '2022', '2', 'FXTX - Belton', '$ 11818', '1634'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //   },
  //   {
  //     row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   {
  //     row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
  //     color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   },
  //   // {
  //   //   row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  //   // {
  //   //   row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
  //   //   color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
  //   //   bgColor: [rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1, 1),rgb(1, 1,1),rgb(1, 1, 1),rgb(1, 1, 1)]

  //   //   // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
  //   // },
  // ];
  // pdfService.setCurrentY(3);
  // pdfService.renderTable(modelInputs, [100,80,60,100,80,50]);
  // pdfService.setCurrentY(20);

  // pdfService.drawSubHeader("Model Output",'left',6);
  
  // const tableOutputData = [
  //   {
  //     row: ['Output Field','Description'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
     
  //   },
  //   {
  //     row: ['unique_id',	'Anonymized identifier for location and SKU'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]
      
  //   },
  //   {
  //     row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['location',	'Anonymized location identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['sku',	'Anonymized SKU identifier'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['division',	'Division'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['region',	'Region'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg1',	'Product hierarchy level 1'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg2',	'Product hierarchy level 2'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['pg3',	'Product hierarchy level 3'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   },
  //   {
  //     row: ['predicted_quantity',	'Predicted quantity for the given month'],
  //     color: [rgb(0,0,0),rgb(0,0,0)],
  //     bgColor: [rgb(1, 1, 1),rgb(1, 1, 1)]

  //     // bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
  //   }
  // ];

  // pdfService.renderTable(tableOutputData, [150,300]);
  // pdfService.setCurrentY(10);

  // await pdfService.addLocalImage('./assets/us-permits-model-card.png', 70);
  // pdfService.setCurrentY(15);
  // await pdfService.addLocalImage('./assets/permits-by-region.png',140);
  // pdfService.setCurrentY(15);

  // pdfService.setCurrentY(20);
  // pdfService.drawSubHeader('Model Paramaeters','left',6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Historical Sales Data",'left',16);
  // pdfService.drawWrappedText("• Market Trends",'left',16);
  // pdfService.drawWrappedText("• Seasonal Factors",'left',16);
  // pdfService.drawWrappedText("• Promotions",'left',16);
  // pdfService.drawWrappedText("• Economic Indicators",'left',16);
  // pdfService.drawWrappedText(
  //   "• Model Process: Uses demand forecasting algorithms like ARIMA to identify patterns and forecast future demand",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Model Purpose: Provide accurate demand predictions for planning decisions",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Algorithm: Demand forecasting using Prophet/SARIMA models','left',30);
  // pdfService.drawWrappedText('• Input Window: Last 12 months of data','left',30);
  // pdfService.drawWrappedText('• Features Engineered:','left',30);
  // pdfService.drawWrappedText('• Seasonal Patterns','left',45);
  // pdfService.drawWrappedText('• Trend Components','left',45);
  // pdfService.drawWrappedText('• Lag based features e.g., sales lag by 1, 2, 3 months)','left',45);
  // pdfService.drawWrappedText('• Output Horizon: One-month forecast for each SKU-location pair','left',30);
  // pdfService.drawWrappedText('• Evaluation Metrics:','left',30);
  // pdfService.drawWrappedText('• Mean Absolute Percentage Error (MAPE)','left',45);
  // pdfService.drawWrappedText('• Root Mean Square Error','left',45);
  // // pdfService.drawWrappedText('• Forecast Bias','left',45);




  
  // pdfService.setCurrentY(20);

  // pdfService.drawHeading("4. Technical Details", "left");
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• MRM Underlying Model Name: ARIMA (AutoRegressive Integrated Moving Average)",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText(
  //   "• Model Link: ",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md ",
  //   "left",
  //   6,
  // );
  // // pdfService.drawWrappedText(
  // //   "• Model Link : https://github.com/microsoft/ML-For-Beginners/blob/main/7-TimeSeries/2-ARIMA/README.md",
  // //   "left",
  // //   6
  // // );
  // // const linkX = 50 + pdfService.font.widthOfTextAtSize("• MRM Underlying Model Name: ", fontSize); // Offset for "• MRM Underlying Model Name: "
  // // const linkY = pdfService.currentY;
  // // const linkAnnotation = {
  // //   Type: 'Annot',
  // //   Subtype: 'Link',
  // //   Rect: [linkX, linkY - 12, linkX + textWidth, linkY], // Rectangle around "ARIMA ..."
  // //   Border: [0, 0, 0], // Optional border
  // //   A: {
  // //     Type: 'Action',
  // //     S: 'URI',
  // //     URI: 'https://www.openai.com', // Your desired link
  // //   },
  // // };
  // // const fontSize = 12;
  // // const text = "ARIMA (AutoRegressive Integrated Moving Average)";

  // // Measure text width
  // // const textWidth = pdfService.font.widthOfTextAtSize(text, fontSize);

  // // Draw the text
  // // const x = 50; // Starting x-coordinate
  // // const y = 300; // Starting y-coordinate
  // // pdfService.page.drawText(`• MRM Underlying Model Name: ${text}`, {
  // //   x: x,
  // //   y: y,
  // //   size: fontSize,
  // //   font: pdfService.font,
  // //   color: rgb(0, 0, 0),
  // // });
  // pdfService.drawWrappedText(
  //   "• The model applies time series analysis to detect historical demand patterns, identify trends, and make future predictions. It is deployed in Python or R environments using TensorFlow as a backend for model computations.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("5. Model Performance and Impact Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader('Accuracy Metrics', 'left');
  pdfService.setCurrentY(3);

  ////
  // await pdfService.addLocalImage('./assets/dummy-1.png',120,0.4);
  // pdfService.setCurrYTop(120);
  // await pdfService.addLocalImage('./assets/dummy-2.png',120,0.4, 300);
  // pdfService.setCurrentY(15);

  await pdfService.addLocalImage('./assets/market-segment-graph1.png',160,0.5);
  pdfService.setCurrYTop(160);
  await pdfService.addLocalImage('./assets/market-segment-graph2.png',160,0.5, 300);
  pdfService.setCurrentY(15);
  await pdfService.addLocalImage('./assets/market-segment-graph3.png',160,0.6, 180);
  pdfService.setCurrentY(15);
  /////

  pdfService.drawSubHeader("Performance Summary", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Noticing Figure-1, This comparison highlights the trade-off between the accuracy of the segmentation model and its response time. As the accuracy of the model improves, it may result in slower response times, making it important to find a balance that delivers both high-quality segmentation and fast processing times for an optimal user experience.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• In the Figure-2, This comparison shows the positive correlation between the improvements in the segmentation model and increasing user engagement and feedback. As the model gets better at segmenting users based on their preferences and behaviors, user satisfaction increases, indicating that the model’s changes are successfully aligning with user expectations.",'left',6);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText("• Comparing Figure-3, This comparison examines how the growth in the number of users impacts the overall market effectiveness and targeted marketing efforts. While a larger user base can lead to better market reach, it’s important to consider other factors (like marketing strategies or external conditions) to determine if the increase in effectiveness is directly due to user growth or influenced by additional factors.",'left',6);
  pdfService.setCurrentY(3);
  // pdfService.drawSubHeader('1. Demand Prediction','left',15);
  // pdfService.drawWrappedText('• Predicted demand aligns closely with actual demand, showing an accuracy of 85%.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Observations indicate demand stability, with predictions remaining consistent from March 2024 to January 2025.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('2. Forecast Variability','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Bias fluctuates between -10.0% to 10.0%, suggesting minor prediction imbalances across periods.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Most bias trends indicate manageable deviations, staying close to the neutral line, with outliers observed around July and November 2024.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Error Metrics','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Peaks in errors may correspond to volatile demand patterns observed around September 2024, but the model manages overall stability.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('4. GenAI Metrics:','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Truthfulness, Accuracy, and Precision maintain values around 80%, indicating high-quality predictions.','left',25);
  // pdfService.setCurrentY(15);


  // pdfService.drawSubHeader('1. Mean Absolute Percentage Error (MAPE)','left',15);
  // pdfService.drawWrappedText('• Measures average percentage deviation between predicted and actual demand values.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Lower MAPE indicates higher forecast accuracy.','left',25);
  // pdfService.setCurrentY(3);


  // pdfService.drawSubHeader('2. Mean Absolute Deviation (MAD)','left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Provides the average magnitude of absolute forecast errors.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Helps to measure error size irrespective of direction.','left',25);
  // pdfService.setCurrentY(3);

  // pdfService.drawSubHeader('3. Forecast Bias', 'left',15);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Indicates whether the model consistently over- or under-predicts demand.','left',25);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText('• Values near zero suggest unbiased predictions.','left',25);
  // pdfService.setCurrentY(3);

  //////////////////////

  
  // pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Performance Metrics", 'left', 6);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAPE: Indicates relative forecast accuracy.",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• MAD: Highlights absolute error size",'left',16);
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• Bias: Detects consistent over- or under-predictions.",'left',16);
  // pdfService.setCurrentY(10);

  // pdfService.drawSubHeader("Impact Assessment", "left");
  // pdfService.setCurrentY(3);
  // pdfService.drawWrappedText("• The model improves inventory management by enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",'left',6);
  // pdfService.setCurrentY(3);

  // pdfService.drawWrappedText(
  //   "• Performance Metrics: Forecast accuracy metrics, such as Mean Absolute Percentage Error (MAPE)",
  //   "left",
  //   6
  // );
  // pdfService.drawWrappedText(
  //   "• Impact Assessment: The model supports inventory management, enhancing supply chain responsiveness and reducing costs associated with overstock and stockouts.",
  //   "left",
  //   6
  // );
  // pdfService.setCurrentY(20);

  pdfService.drawHeading("6. Compliance and Governance", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The Dynamic Rental Pricing (AI) model adheres to strict AI governance standards, ensuring compliance with industry-specific regulations for pricing and property management. Responsible AI practices are incorporated to guarantee that the model's pricing predictions are fair, unbiased, and ethically sound. Regular evaluations and audits are conducted to validate the model's performance, accuracy, and compliance with data protection laws and real estate regulations.",
    "left",
    6
);
  pdfService.setCurrentY(20);

  pdfService.drawHeading("7. Recommendations and Next Steps", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Enhance the Dynamic Rental Pricing (AI) model by incorporating more advanced regression algorithms and real-time market data to improve pricing accuracy and adaptability to changing market conditions.",
    "left",
    6
);
pdfService.drawWrappedText(
  "• Integrate Dynamic Rental Pricing (AI) with property management systems (PMS) to enable seamless data flow and provide pricing insights that support occupancy optimization and revenue management.",
  "left",
  6
);
pdfService.drawWrappedText(
  "• Continuously update the training dataset with new property market trends, occupancy data, and competitor pricing information to maintain the accuracy and relevance of the pricing predictions.",
  "left",
  6
);
pdfService.drawWrappedText(
  "• Expand the model's pricing capabilities to include predictive analytics, allowing for the identification of optimal rental prices and anticipating market shifts for better revenue management.",
  "left",
  6
);

  pdfService.setCurrentY(20);


  // const pdfBytes = await pdfDoc.save();

  // // Set headers to prompt download
  // res.setHeader("Content-Disposition", "attachment; filename=model-card-report.pdf");
  // res.setHeader("Content-Type", "application/pdf");

  // res.send(Buffer.from(pdfBytes));
  pdfService.drawSubHeader('Model Risk Findings for MarketSegmenter','left',6);

  const tableData = [
    {
      row: ['No', 'Finding Title', 'Description', 'Impact', 'Recommendation'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
    },
    {
      row: [
        '1', 
        'Inaccurate Pricing Predictions', 
        'The dynamic pricing model may misprice properties due to incorrect or incomplete historical data, leading to inaccurate price predictions.',
        'Incorrect pricing may result in properties being overpriced or underpriced, affecting occupancy rates and revenue generation.',
        'Improve the data quality and ensure that the model considers a broader range of features such as location, market conditions, and property-specific characteristics.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '2', 
        'Failure to Adjust to Market Dynamics', 
        'The pricing model may not adapt quickly enough to changes in the market, such as sudden shifts in demand or competitor pricing.',
        'Failure to adapt can result in lost revenue opportunities, with properties priced too high or too low relative to market trends.',
        'Enhance the model’s ability to incorporate real-time market data and external factors such as seasonal demand and local events.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '3', 
        'Bias in Pricing Predictions', 
        'The pricing model might inadvertently incorporate biases based on location, property type, or other factors, leading to inconsistent pricing.',
        'Bias in pricing can lead to unfair pricing practices, such as overpricing properties in certain areas or underpricing others.',
        'Introduce fairness measures to ensure that the model considers all relevant factors and adjusts pricing equitably across different property types and locations.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: [
        '4', 
        'Overfitting to Historical Data', 
        'The pricing model may overfit to past data, resulting in poor predictions for new properties or changing market conditions.',
        'Overfitting can limit the model’s generalizability and its ability to adapt to new data, reducing its effectiveness in dynamic pricing situations.',
        'Implement regularization techniques and cross-validation to ensure the model generalizes well to unseen data, improving scalability.'
      ],
      color: [rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  



  pdfService.renderTable(tableData, [50, 110,110,110,120])

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample-model-card.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/usecase-prioritization-updated-report-tenantretentionAI", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "TenantRetentionAI leverages advanced AI techniques to transform tenant retention strategies in property management. By analyzing tenant data, including payment history, satisfaction surveys, maintenance requests, and lease documents, it predicts the likelihood of tenant retention. This model helps property managers identify at-risk tenants, enabling them to take proactive actions to improve tenant retention and reduce vacancy rates, optimizing revenue and operational efficiency.",
    'left'
  );

  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Launch Announcement', 'Introduction of TenantRetentionAI, an AI-driven solution designed to predict tenant retention and improve property management strategies.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Product Launch', 'TenantRetentionAI analyzes tenant data including payment history, satisfaction surveys, and maintenance requests to predict retention likelihood and identify at-risk tenants.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Purpose', 'Enhance tenant retention by providing actionable insights to property managers, enabling proactive measures to reduce vacancies and improve tenant satisfaction.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Talent Amplification', 'Empower property management teams with predictive insights to improve tenant engagement, retention strategies, and overall tenant experience.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]    
    },
    {
      row: ['Key Customer Benefits', 'Reduced tenant turnover, Improved tenant engagement, Enhanced retention strategies, Increased revenue stability'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)] 
    },
    {
      row: ['Human In the Loop', 'Designed to support property managers by providing predictive insights, highlighting at-risk tenants and helping implement targeted retention actions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Intended Audience', 'Primarily for property managers, real estate agents, and asset managers who are looking to improve tenant retention and operational efficiency.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Limitations of Offering', 'Predictions are based on historical and behavioral data, which may require regular updates to ensure accuracy in dynamic market conditions.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Role Complexity', 'Addresses the complexities of tenant retention by analyzing diverse data points such as tenant payment history, satisfaction surveys, and maintenance requests, making it easier for managers to predict retention risks.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Customer Challenges', 'Property managers face challenges such as: Predicting tenant behavior, Managing occupancy rates, Identifying early signs of tenant dissatisfaction.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Identifying Customer Needs', 'Feedback from property management teams indicated the need for predictive tools to better forecast tenant retention and proactively address issues before they lead to vacancies.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Data Challenges', 'Tenant data is often fragmented across systems, such as lease agreements, payment logs, and maintenance requests, making comprehensive analysis a challenge.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Future Tools', 'Proposed tools for enhancement: Real-time tenant satisfaction monitoring, Predictive models for lease renewal likelihood, Integration with CRM and tenant portals for data enrichment.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Non Functional Requirements', 'High availability, Scalable infrastructure, Regular data updates, User-friendly interface with minimal training required for property managers.'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];
  

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Predictive Insights) to Level 3 (Fully AI-Driven Tenant Retention Predictions and Automated Engagement).",
    "left"
  );
  
  
  pdfService.drawWrappedText(
    "• Level 0: No predictive insights; tenant retention decisions are made without data-driven analysis, leading to reactive strategies and missed opportunities for proactive engagement.",
    "left",
    6
  );
  
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; utilizes predictive analytics to forecast tenant behavior, proactively engages at-risk tenants, and optimizes retention strategies in real-time.",
    "left",
    6
  );
  

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");
  pdfService.setCurrentY(3);

  const tcoTableData = [
    {
      row: ['Cost Factor', 'TotalCost ($)'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0, 0.125, 0.376)]
    },
    {
      row: ['People Factor','$ 120,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Operations Factor','$ 180,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Technology Factor','$ 220,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Infrastructure Factor','$ 150,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 80,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 45,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 795,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];
  

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  // const tableData = [
  //   {
  //     row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   // {
  //   //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
  //   //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //   //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   // }
  // ];

  // pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/roi-table-marketsegmenter.png',150, 0.6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("ROI Graph",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/roi-graph-marketsegmenter.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a detailed architecture will be presented for the selected tenant retention use case, which the real estate management company can implement to enhance tenant engagement and retention through AI-driven solutions.",
    "left"
  );
  
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap-updated1.png",160,0.9);
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures implemented for tenant retention AI initiatives. The organization has established a Tenant Data Governance Policy to ensure responsible handling of tenant-related data and formed Tenant Retention Risk Committees to oversee and manage risks related to tenant engagement and retention strategies.",
    "left",
    6
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations actively applied in the organization’s tenant retention AI architecture. In Tenant Engagement Data Pipelines, the organization utilizes sentiment analysis models and tenant behavior tracking to structure and reason over tenant-related data, improving engagement strategies and retention insights.",
    "left",
    6
  );
  
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage('./assets/TenantRetention-AI.png',250,0.6);
  // await pdfService.addURLImage('https://fusefy-staging.s3.amazonaws.com/low-level-architecture-diagrams/74caf3fc-7bf9-4fae-a382-e11011b5c44b.png')
  pdfService.setCurrentY(10);
  
  // pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  // pdfService.setCurrYTop(260);
  // pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  // await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  // pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("3. Maturity level 2","left",15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  // pdfService.setCurrYTop(320);
  // pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially, especially due to the complexity of implementing tenant retention AI systems.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 in tenant retention AI introduces fully AI-driven automation for tenant engagement, significantly enhancing efficiency and reducing manual follow-up efforts.",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth after the AI system matures, driven by improved tenant satisfaction, retention, and reduced churn, demonstrates the project's long-term financial viability.",
    "left",
    6
  );
  
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);

  // Users Section
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The targeted user groups include property management teams and organizations focusing on enhancing tenant retention and engagement. The identified users are:",
    "left", 15
  );
  pdfService.drawWrappedText(
    "• Property Management Teams: ~50 users utilizing the AI tool for identifying at-risk tenants, improving retention strategies, and optimizing tenant engagement efforts.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Customer Support Teams: ~30 users leveraging insights from the AI-driven segmentation to provide personalized communication and support to tenants.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Data Analysts: ~20 users using tenant behavior data to identify trends, forecast retention rates, and support strategic decision-making for tenant management.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~15 users benefiting from tenant engagement data to create targeted campaigns that enhance tenant satisfaction and retention.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from more precise tenant engagement strategies, improved retention rates, and actionable insights into tenant needs, all while maintaining control through human-in-the-loop (HITL) processes.",
    "left", 15
  );
  pdfService.setCurrentY(10);
  


  // Territories Section
  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For this, the deployment will initially target regions with a high concentration of rental properties and tenant management activity.",
    "left", 15
  );
  pdfService.drawWrappedText(
    "• Primary Territories: The United States, Canada, and Europe, focusing on metropolitan areas with large rental markets, diverse tenant demographics, and significant tenant retention challenges.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In future phases, this may expand to Asia and Australia, especially regions with growing rental markets and a need for advanced tenant retention strategies.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: The tool will adhere to regional data privacy regulations, including GDPR (for Europe), CCPA (for the U.S.), and other relevant standards, ensuring tenant data protection.",
    "left", 25
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: The tool will accommodate regional tenant preferences, legal requirements, and property management practices, ensuring better integration and optimizing retention strategies in each target market.",
    "left", 25
  );
  pdfService.setCurrentY(10);
  


  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Use Case:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Accuracy Risk: Inaccurate predictions in tenant retention patterns or incomplete data analysis could lead to misguided retention strategies, affecting tenant satisfaction and overall retention rates.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Overdependence on automated retention strategies without human validation might result in missed nuances in tenant behavior or unfair treatment of certain tenant groups.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Security and Privacy Risk: The handling of sensitive tenant information and personal data poses significant privacy concerns, particularly in regions with strict data protection laws like GDPR or CCPA. Ensuring robust data security is essential.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Ethical Bias: AI-driven tenant retention strategies may unintentionally favor certain tenant profiles over others, perpetuating bias. It is crucial to implement fairness measures to avoid discriminating against underrepresented groups.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Integration and Compatibility Challenges: Integration with existing property management systems or tenant databases might require additional configuration, causing delays or complications during deployment.",
    "left",
    25
  );
  



  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  pdfService.drawWrappedText(
    "• Conduct thorough validation checks to ensure AI-generated tenant retention predictions are accurate, relevant, and aligned with tenant behavior patterns.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Incorporate a Human-in-the-Loop (HITL) process to enable tenant retention teams to review and adjust AI-generated strategies, ensuring they align with business objectives and tenant needs.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Implement stringent data security measures and comply with data privacy regulations such as GDPR and CCPA to protect sensitive tenant information and maintain trust.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Conduct regular audits of AI-driven retention strategies to identify and mitigate potential biases, ensuring equitable treatment of all tenants and promoting fairness in decision-making.",
    "left",
    25
  );
  pdfService.drawWrappedText(
    "• Ensure seamless integration with existing property management and CRM tools, adapting to evolving technological requirements and improving the efficiency of retention efforts.",
    "left",
    25
  );
  






  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the transformative potential and strategic value of TenantRetentionAI, an AI-driven solution aimed at enhancing tenant retention in property management. The initiative is expected to improve tenant engagement, reduce churn, and unlock new opportunities for property managers by delivering accurate, data-driven insights on tenant behavior.",
    "left"
  );
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "By incorporating this AI solution into the tenant management workflow, property management teams can expect improved retention strategies, better resource allocation, and more effective communication with tenants. This supports the broader organizational goals of increasing tenant satisfaction, reducing turnover rates, and optimizing operational efficiency.",
    "left"
  );
  


  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

app.get("/usecase-prioritization-updated-report-rentalpricingpredictionAI", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  const topTableDataReport = [
    {
      row: ['Report','Usecase Prioritization Report - Real Estate Services'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    },
    {
      row: ['Report generated on','08/08/2024'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.078, 0.541), rgb(0.91, 0.91, 0.91)]
    },
    {
      row: ['Conducted By','FUSEFY'],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0.949, 0.949, 0.949)]
    }
  ];

  pdfService.renderTable(topTableDataReport, [175, 300]);

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);


  // pdfService.setCurrentY()
  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  const tableOfContentTabularData = [
    {
      row: ['1. Introduction','3'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['2. Current and Target Values','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['3. Total Cost of Ownership(TCO)','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['4. ROI Table','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['5. Roadmap for Implementation','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['6. AI Architecture and Features','8'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['7. System architecture','5'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['8. Key for Takeaways','6'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['9. Users and Territories', '9'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)],
    },
    {
      row: ['11. Conclusion','7'],
      color: [rgb(0,0,0), rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    }
  ];

  pdfService.renderTable(tableOfContentTabularData, [350, 70]);

  pdfService.setCurrentY(842 - pdfService.currentY);

  // pdfService.setCurrentY(20);

  // pdfService.setCurrentY(390);

  pdfService.drawHeading("1. Introduction", "left");
  pdfService.setCurrentY(1);
  pdfService.drawWrappedText(
    "DynamicRentalPricingAI utilizes advanced AI algorithms to revolutionize pricing strategies in property management. By analyzing historical rental data, market trends, property characteristics, and competitor pricing, it predicts optimal pricing for rental properties. This model helps property managers adjust prices dynamically, ensuring competitive rates that maximize occupancy and revenue. By adapting to market fluctuations in real-time, DynamicRentalPricingAI enables more informed decision-making, improving financial performance and operational efficiency.",
    'left'
  );
  

  pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The AI-driven demand prediction system is designed to forecast future product demand accurately, enabling businesses to optimize inventory levels. The system helps minimize stockouts and overstock scenarios, reducing operational costs and improving supply chain efficiency. ",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "We are seeking approval to move from the pilot phase to a full-scale deployment of the Demand Forecasting solution. The approval will allow us to integrate the solution into the broader supply chain and retail operations, expanding its usage to multiple departments such as procurement, inventory management, and sales planning. The initial deployment will involve a limited user base for testing the integration and validating forecast accuracy across different product categories. The full-scale implementation will enable the system to provide predictive insights for inventory optimization, demand planning, and resource allocation. We anticipate involving approximately 100-150 users across various teams. The approval will also cover the use of the solution in specific geographic regions, ensuring compliance with local data privacy regulations and operational standards.",
  //   "left"
  // );
  // pdfService.setCurrentY(1);
  // pdfService.drawWrappedText(
  //   "The primary purpose of the Demand Forecasting solution within Fusefy is to enable businesses to make data-driven decisions by accurately predicting future demand for products or services. The solution will be used to optimize inventory management, streamline procurement strategies, and improve sales forecasting. Key decision-making areas it supports include determining optimal stock levels, adjusting supply chain strategies, and forecasting demand fluctuations due to seasonality, promotions, or external market events. By automating and enhancing these processes, the solution aims to reduce operational inefficiencies, prevent stockouts or overstocking, and minimize costs associated with excess inventory or missed sales opportunities.",
  //   "left");
  pdfService.setCurrentY(10);
  
  pdfService.drawHeading("Prioritization Stage", "left");

  const prTableData = [
    {
      row: ['Key Aspect', 'Description'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Launch Announcement', 'Introduction of DynamicRentalPricingAI, an AI-driven solution designed to optimize rental pricing strategies for property managers.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Product Launch', 'DynamicRentalPricingAI analyzes rental market data, property characteristics, historical pricing trends, and competitor rates to determine optimal pricing strategies for each property.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Purpose', 'Enhance property management strategies by providing real-time pricing recommendations, improving revenue, occupancy rates, and competitiveness in the market.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Talent Amplification', 'Empower property managers with AI-driven insights to dynamically adjust pricing, improving market positioning and profitability.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]    
    },
    {
      row: ['Key Customer Benefits', 'Maximized rental income, Increased occupancy rates, Data-driven pricing strategies, Enhanced market competitiveness'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)] 
    },
    {
      row: ['Human In the Loop', 'Supports property managers by providing actionable insights, but requires human judgment to adjust pricing based on market nuances and strategic priorities.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Intended Audience', 'Property managers, real estate agents, and asset managers looking to optimize rental pricing strategies and increase revenue from rental properties.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Limitations of Offering', 'The model’s accuracy depends on the quality of available data, and predictions may require periodic adjustments to reflect shifting market conditions.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Role Complexity', 'The model analyzes diverse data sources such as market conditions, competitor pricing, and property characteristics, making it a comprehensive tool for dynamic rental pricing.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Customer Challenges', 'Property managers face challenges such as: Adjusting rental prices in real-time, Analyzing market trends, Ensuring competitive pricing strategies.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Identifying Customer Needs', 'Feedback from property managers shows a need for AI-driven solutions to simplify pricing decisions and ensure that rental rates stay competitive and aligned with market demand.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Data Challenges', 'Rental pricing data can be fragmented across multiple sources, including market data, competitor websites, and property management systems, which can complicate comprehensive analysis.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Future Tools', 'Proposed tools for enhancement: Integration with property management platforms, Real-time competitor pricing analysis, AI-based recommendations for lease renewals and pricing adjustments.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    },
    {
      row: ['Non Functional Requirements', 'Scalable infrastructure, Real-time data processing, High availability, User-friendly interface with minimal training required for property managers.'],
      color: [rgb(0, 0, 0), rgb(0, 0, 0)],
      bgColor: [rgb(1, 1, 1), rgb(1, 1, 1)]
    }
  ];
  
  

  pdfService.renderTable(prTableData, [120, 380]);
  // pdfService.setCurrentY(842 - pdfService.currentY + 120);
  pdfService.setCurrentY(25);

  pdfService.drawHeading("2. Current and Target Values", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The project aims to advance from Level 0 (No Predictive Insights) to Level 3 (Fully AI-Driven Dynamic Rental Pricing and Optimization).",
    "left"
  );
  
  pdfService.drawWrappedText(
    "• Level 0: No predictive insights; rental pricing decisions are made without data-driven analysis, resulting in static pricing strategies and missed opportunities to maximize revenue and occupancy.",
    "left",
    6
  );
  
  pdfService.drawWrappedText(
    "• Level 3: Fully AI-driven automation; uses predictive analytics to adjust rental pricing in real-time based on market conditions, competitor rates, and property characteristics, optimizing revenue and occupancy rates.",
    "left",
    6
  );
  
  

  pdfService.setCurrentY(25);

  pdfService.drawHeading("3. Total Cost of Ownership (TCO)", "left");
  pdfService.setCurrentY(3);

  const tcoTableData = [
    {
      row: ['Cost Factor', 'TotalCost ($)'],
      color: [rgb(1, 1, 1), rgb(1, 1, 1)],
      bgColor: [rgb(0, 0.125, 0.376), rgb(0, 0.125, 0.376)]
    },
    {
      row: ['People Factor','$ 120,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Operations Factor','$ 180,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Technology Factor','$ 220,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Infrastructure Factor','$ 150,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Business Factor','$ 80,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Usability Factor','$ 45,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
    {
      row: ['Total TCO','$ 795,000'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1,1,1), rgb(1,1,1)]
    },
  ];
  

  pdfService.renderTable(tcoTableData, [150,150]);
  
  pdfService.setCurrentY(20);

  pdfService.drawHeading("4. ROI Table", "left");

  // const tableData = [
  //   {
  //     row: ['Year', 'Cumulative Costs', 'Cumulative Benefits', 'Net Gain','ROI (in %)'],
  //     color: [rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1), rgb(1, 1, 1)],
  //     bgColor: [rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5), rgb(0, 0, 0.5)]
  //   },
  //   {
  //     row: ['0', '$ 300000', '$ 0', '- $ 300000', '0%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(1,0,0),rgb(0, 0.5, 0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['1','$ 350000', '$ 1000000', '$ 150000','30%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['2','$ 400000', '$ 250000', '$ 250000','40%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['3','$ 450000', '$ 450000', '$ 300000','50%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   {
  //     row: ['4','$ 500000', '$ 700000', '$ 350000', '60%'],
  //     color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //     bgColor: [rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   },
  //   // {
  //   //   row: ['5','$ 500000', '$ 1000000', '$ 400000', '70%'],
  //   //   color: [rgb(0,0,0), rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0.5,0)],
  //   //   bgColor: [rgb(0.8, 0.8, 0.8), rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.8, 0.8, 0.8),rgb(0.5, 1, 0.5)]
  //   // }
  // ];

  // pdfService.renderTable(tableData, [80,80,80,80,80]);
  pdfService.setCurrentY(3);
  await pdfService.addLocalImage('./assets/roi-table-marketsegmenter.png',150, 0.6);
  pdfService.setCurrentY(10);

  pdfService.drawSubHeader("ROI Graph",'left');
  pdfService.setCurrentY(10);
  await pdfService.addLocalImage('./assets/roi-graph-marketsegmenter.png', 230);
  pdfService.setCurrentY(10);
  pdfService.setCurrentY(3);
  pdfService.drawHeading("5. Roadmap for Implementation", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "After use case prioritization, a detailed architecture will be presented for the selected dynamic rental pricing use case, which the real estate management company can implement to optimize rental pricing, maximize revenue, and improve occupancy through AI-driven solutions.",
    "left"
  );
  
  
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage("./assets/roadmap-updated1.png",160,0.9);
  pdfService.setCurrentY(25);
  

  pdfService.drawHeading("6. AI Architecture and Features", "left");
  pdfService.setCurrentY(5);
  await pdfService.addLocalImage('./assets/updated-arch.png',220);
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "• The pink-colored areas represent foundational governance and control measures implemented for dynamic rental pricing AI initiatives. The organization has established a Rental Pricing Data Governance Policy to ensure responsible handling of pricing-related data and formed Pricing Strategy Committees to oversee and manage risks related to pricing decisions and market trends.",
    "left",
    6
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• The grey-colored areas highlight technical implementations actively applied in the organization’s dynamic rental pricing AI architecture. In Rental Pricing Data Pipelines, the organization utilizes market trend analysis models and tenant demand forecasting to structure and reason over pricing-related data, improving pricing strategies and maximizing revenue.",
    "left",
    6
  );
  
  
  pdfService.setCurrentY(25);


  pdfService.drawHeading("7. System architecture",'left');
  pdfService.setCurrentY(3);

  await pdfService.addLocalImage('./assets/RentalPricing-Prediction_AI.png',250,0.6);
  pdfService.setCurrentY(10);
  
  // pdfService.drawSubHeader("1. Maturity Level 0",'left',15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-4.png',240,0.3);

  // pdfService.setCurrYTop(260);
  // pdfService.drawSubHeader("2. Maturity Level 1",'left',250);
  // await pdfService.addLocalImage('./assets/low-level-arch-3.png',240,0.3,300);

  // pdfService.setCurrentY(25);

  // pdfService.drawSubHeader("3. Maturity level 2","left",15);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-2.png',300,0.4);

  // pdfService.setCurrYTop(320);
  // pdfService.drawSubHeader("4. Maturity Level 3","left",250);
  // pdfService.setCurrentY(3);
  // await pdfService.addLocalImage('./assets/low-level-arch-1.png',300,0.4,300);

 

  pdfService.setCurrentY(10);


  pdfService.drawHeading("8. Key Takeaways", "left");
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Initial Investment Impact: High upfront costs may lead to negative ROI initially, particularly due to the complexity of implementing dynamic rental pricing AI systems and the integration with market data sources.",
    "left",
    6
  );
  
  pdfService.drawWrappedText(
    "• Transition Levels: The move from Level 0 to Level 3 in dynamic rental pricing AI introduces fully AI-driven automation for pricing adjustments, significantly enhancing revenue optimization and reducing manual intervention in pricing decisions.",
    "left",
    6
  );
  
  pdfService.drawWrappedText(
    "• Long-Term ROI Growth: Substantial ROI growth after the AI system matures, driven by optimized rental prices, improved market responsiveness, and increased occupancy rates, demonstrates the project's long-term financial viability.",
    "left",
    6
  );
  
  
  pdfService.setCurrentY(15);

  
  // {
  //   row: ['9. Users and Territories', '9'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },
  // {
  //   row: ['10. Risk Assessment and Reporting', '10'], // Added from new content
  //   color: [rgb(0,0,0), rgb(0,0,0)],
  //   bgColor: [rgb(1,1,1), rgb(1,1,1)],
  // },

  pdfService.drawHeading("9. Users and Territories", "left");
  pdfService.setCurrentY(3);

  // Users Section
  pdfService.drawSubHeader("1. Users", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The targeted user groups include property management teams, pricing analysts, and organizations focusing on optimizing rental prices and occupancy rates. The identified users are:",
    "left", 15
  );
  
  pdfService.drawWrappedText(
    "• Property Management Teams: ~50 users utilizing the AI tool for dynamically adjusting rental prices based on market trends, tenant demand, and property characteristics to optimize revenue and occupancy.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Pricing Analysts: ~30 users leveraging insights from the dynamic pricing AI to forecast rental price adjustments, analyze competitor pricing, and provide data-driven pricing strategies.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Data Analysts: ~20 users using rental pricing data to identify market trends, forecast demand, and support strategic decision-making for pricing adjustments and market positioning.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Marketing Teams: ~15 users benefiting from dynamic pricing data to create promotional campaigns, optimize leasing terms, and target the right tenants at the right price point.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "This user group will benefit from more precise pricing strategies, optimized revenue generation, and enhanced market competitiveness, all while maintaining control through human-in-the-loop (HITL) processes.",
    "left", 15
  );
  
  pdfService.setCurrentY(10);
  
  


  // Territories Section
  pdfService.drawSubHeader("2. Territories", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "For this, the deployment will initially target regions with a high concentration of rental properties, rental demand fluctuations, and pricing optimization needs.",
    "left", 15
  );
  
  pdfService.drawWrappedText(
    "• Primary Territories: The United States, Canada, and Europe, focusing on metropolitan areas with competitive rental markets, diverse property types, and dynamic pricing requirements.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Global Expansion: In future phases, this may expand to Asia and Australia, especially regions with growing rental markets, increasing demand for smart pricing tools, and opportunities to optimize occupancy rates.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Compliance Measures: The tool will adhere to regional data privacy regulations, including GDPR (for Europe), CCPA (for the U.S.), and other relevant standards, ensuring compliance with pricing data protection policies.",
    "left", 25
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "• Localized Insights: The tool will accommodate regional market trends, pricing regulations, tenant demographics, and property management practices, ensuring better integration and optimizing rental prices in each target market.",
    "left", 25
  );
  
  pdfService.setCurrentY(10);
  
  


  pdfService.drawHeading("10. Risk Assessment", "left");
  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("1. Identified Risks", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "The following risks have been identified for the Use Case:",
    "left",
    15
  );
  
  pdfService.drawWrappedText(
    "• Accuracy Risk: Inaccurate predictions in rental price optimization or incomplete market data analysis could lead to misguided pricing strategies, affecting occupancy rates and revenue generation.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Over-Reliance on Automation: Overdependence on automated pricing strategies without market condition adjustments or human validation might result in pricing that is out of sync with current market demand or tenant preferences.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Security and Privacy Risk: The handling of sensitive tenant and pricing data poses significant privacy concerns, particularly in regions with strict data protection laws like GDPR or CCPA. Ensuring robust data security is essential to avoid violations.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Ethical Bias: AI-driven pricing strategies may unintentionally favor certain tenant demographics or property types over others, leading to biased pricing models. It is essential to incorporate fairness measures to ensure equitable pricing for all tenants.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Integration and Compatibility Challenges: Integration with existing property management systems, real-time market data sources, or dynamic pricing engines might require additional configuration, causing delays or complications during deployment.",
    "left",
    25
  );
  
  



  pdfService.setCurrentY(3);
  pdfService.drawSubHeader("2. Mitigation Measures", "left", 15);
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "To address the identified risks, the following mitigation measures will be implemented:",
    "left",
    15
  );
  
  pdfService.drawWrappedText(
    "• Conduct thorough validation checks to ensure AI-generated rental price predictions are accurate, relevant, and reflective of current market conditions and tenant demand.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Incorporate a Human-in-the-Loop (HITL) process to allow pricing teams to review and adjust AI-generated pricing models, ensuring they align with market dynamics, business objectives, and tenant affordability.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Implement stringent data security measures and comply with data privacy regulations such as GDPR and CCPA to protect sensitive tenant and pricing information, maintaining trust with all stakeholders.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Conduct regular audits of AI-driven pricing strategies to identify and mitigate potential biases, ensuring fair and equitable pricing for all tenants and property types, based on demand and market conditions.",
    "left",
    25
  );
  
  pdfService.drawWrappedText(
    "• Ensure seamless integration with existing property management systems, CRM tools, and real-time data sources, adapting to evolving market trends and improving the efficiency of dynamic pricing strategies.",
    "left",
    25
  );
  
  






  
  pdfService.setCurrentY(10);
  pdfService.drawHeading("11. Conclusion", "left");
  pdfService.setCurrentY(5);
  pdfService.drawWrappedText(
    "This assessment highlights the transformative potential and strategic value of DynamicRentalPricingAI, an AI-driven solution aimed at optimizing rental pricing strategies in property management. The initiative is expected to enhance revenue stability, improve occupancy rates, and unlock new opportunities for property managers by delivering accurate, data-driven insights on market conditions and tenant demand.",
    "left"
  );
  
  pdfService.setCurrentY(3);
  pdfService.drawWrappedText(
    "By incorporating this AI solution into the rental pricing workflow, property management teams can expect more competitive pricing strategies, better resource allocation, and more effective revenue management. This supports the broader organizational goals of maximizing rental income, reducing vacancy rates, and optimizing operational efficiency.",
    "left"
  );
  
  


  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=usecase-prioritization-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
});

// Start the server


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

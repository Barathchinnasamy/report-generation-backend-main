import express, { Request, Response } from "express";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import cors from "cors";
import path from "path";
import fs from "fs";
import fetch from "node-fetch";
import pdfService from "./pdf.service";

const fetchImageFromUrl = async (url: string): Promise<Buffer> => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return buffer;
};

const app = express();
const PORT = 5000;

app.use(cors());

// Route to generate and send PDF
app.get("/maturity-assessment-report", async (_req: Request, res: Response) => {
  await pdfService.init();

  pdfService.setCurrentY(240);

  pdfService.drawText("Enterprise Readiness Insights Report", {
    isBold: true,
    fontSize: 20,
    column: "left",
    color: rgb(0, 0.53, 0.71),
  });

  pdfService.drawText("- Lumbar Supply Chain Managers", {
    isBold: true,
    fontSize: 20,
    column: "left",
    color: rgb(0, 0.53, 0.71),
  });

  pdfService.setCurrentY(10);

  pdfService.drawText(`Report generated on - 06/06/2024`, {
    fontSize: 12,
    column: "left",
  });

  pdfService.setCurrentY(10);
  pdfService.drawText("Conducted By - FUSEFY", {
    fontSize: 12,
    column: "left",
  });
  pdfService.setCurrentY(240);
  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of content", "left");
  pdfService.setCurrentY(40);

  pdfService.drawWrappedText(
    "1. Introduction .............................................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "2. Trustworthy AI Controls ............................................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "3. AI Maturity Assessment .................................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawWrappedText(
    "4. Maturity Levels .........................................................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawWrappedText(
    "5.Assessment Findings ..................................................................................................(2)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawWrappedText(
    "6. Assessment Results ...........................................................................................(4)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.drawWrappedText(
    "7. Gap Analysis .......................................................................................................(5)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

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
      bgColor : [rgb(0, 0, 0.5), rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Level 1: AI Discovery",
        "At the AI Discovery stage, organizations are beginning to experiment with AI technologies. They focus on foundational aspects such as establishing initial data governance policies, experimenting with basic data sources, and implementing basic security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Level 2: AI Pilot Projects ",
        "Organizations at this stage are running pilot AI projects to test feasibility and value. They begin incorporating more structured data sources, establish initial feature stores, and develop feedback mechanisms. On-demand training environments and automated deployments are introduced.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row : [
        "Level 3: AI Strategic Applications",
        "At this stage, AI becomes strategic, supporting key business functions. Organizations integrate additional data sources, refine feature stores, implement advanced feedback mechanisms, and establish AI/ML risk committees. Advanced AI techniques and models are adopted.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row : [
        "Level 4: AI Business Integration",
        "AI is fully integrated into business processes, enhancing operations and decision-making. Advanced feature stores, real-time feature extraction, and automated model retraining are implemented. Proactive monitoring and incident response mechanisms are established.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Level 5: AI Optimization",
        "Organizations focus on optimizing AI performance and scalability. Data sources are optimized, continuous learning models are implemented, and advanced grounding techniques are used. Multi-agent systems enhance data processing, and domain-specific fine-tuning is performed.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Level 6: AI Autonomy",
        "At the highest maturity level, AI systems operate autonomously, making decisions and adapting without human intervention. Real-time feature extraction, self-learning models, and proactive incident response mechanisms are fully implemented.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
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
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]


    },
    {
      row: [
        "Data Governance & Security",
        "Analysis of data handling practices, compliance with privacy regulations, and security measures.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Technical Infrastructure:",
        "Assessment of the existing cloud services, data pipelines, and computing resources supporting AI initiatives. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row: [
        "Trustworthy AI",
        "Evaluation of the transparency, explainability, and fairness of deployed AI models. ",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
    },
    {
      row : [
        "Scalability & Innovation:",
        "Assessment of the organization's ability to scale AI solutions and foster continuous innovation.",
      ],
      color: [rgb(1,1,1), rgb(0,0,0)],
      bgColor: [rgb(0, 0, 0.5),rgb(1, 1, 0.8)]
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
  pdfService.drawHeading("6. Gap Analysis", "left");
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

app.get("/usecase-report", async (_req: Request, res: Response) => {
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
  pdfService.setCurrentY(240);

  // drawText("Model Card Report - The organization", { isBold: true, fontSize: 20, column: "left", color: rgb(0, 0.53, 0.71) });
  pdfService.drawText("Model Card Report - Lumber Supply Chain Managers", {
    isBold: true,
    fontSize: 20,
    column: "left",
    color: rgb(0, 0.53, 0.71),
  });

  pdfService.setCurrentY(10);
  pdfService.drawText("Report generated on - 08/08/2024", {
    fontSize: 12,
    column: "left",
  });
  // drawText("Report generated on - 24/10/2024", { fontSize: 12, column: "left" });

  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(10);
  pdfService.drawText("Conducted By - FUSEFY", {
    fontSize: 12,
    column: "left",
  });

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  pdfService.drawWrappedText(
    "1. Executive Summary/Introduction .............................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "2. Model Overview ............................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "3. Model Purpose and Functionality ......................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "4. Technical Details ...............................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "5. Model Performance and Impact Assessment.............(2)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "6. Compliance and Governance...........(4)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "7. Recommendations and Next Steps...................................(5)",
    "left",
    6
  );
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
  pdfService.drawWrappedText(
    "• Model Name: Demand Forecasting Model",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Model Usage: Predict future product demand to optimize inventory levels and reduce stockouts or overstock situations",
    "left",
    6
  );
  pdfService.drawWrappedText("• Sector: Supply Chain", "left", 6);
  pdfService.drawWrappedText(
    "• Department: Planning and Forecasting",
    "left",
    6
  );
  pdfService.drawWrappedText(
    "• Platform: Python/R/Java Runtimes (TensorFlow)",
    "left",
    6
  );
  pdfService.drawWrappedText("• Frequency of Use: Daily", "left", 6);
  pdfService.drawWrappedText(
    "• Overall Impact of Potential Error: High (Incorrect forecasts could lead to overstocking or stockouts, resulting in financial losses and customer dissatisfaction)",
    "left",
    6
  );
  pdfService.drawWrappedText("• Key Activity: Inventory Management", "left", 6);
  pdfService.setCurrentY(20);

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
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['2022-03', '2022', '3', 'FXTX - Belton', '$ 320237', '45036'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-04', '2022', '4', 'FXTX - Belton', '$ 424288', '50010'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-05', '2022', '5', 'FXTX - Belton', '$ 408569', '48623'],
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-06', '2022', '6', 'FXTX - Belton', '$ 434608', '52845'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-07', '2022', '7', 'FXTX - Belton', '$ 266155', '34973'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-08', '2022', '8', 'FXTX - Belton', '$ 255450', '39827'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-09', '2022', '9', 'FXTX - Belton', '$ 186674', '32789'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row: ['2022-10', '2022', '10', 'FXTX - Belton', '$ 136200', '26962'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
    {
      row : ['2022-11', '2022', '11', 'FXTX - Belton', '$ 48207', '10969'],
      
      color: [rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
   
    },
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
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['yearmonth',	'Predicted year and month in YYYY-MM format'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['location',	'Anonymized location identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['sku',	'Anonymized SKU identifier'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['division',	'Division'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['region',	'Region'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg1',	'Product hierarchy level 1'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg2',	'Product hierarchy level 2'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['pg3',	'Product hierarchy level 3'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
    },
    {
      row: ['predicted_quantity',	'Predicted quantity for the given month'],
      color: [rgb(0,0,0),rgb(0,0,0)],
      bgColor: [rgb(1, 1, 0.8),rgb(1, 1, 0.8)]
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

app.get("/risk-assessment-report", async (req, res) => {

  await pdfService.init();

  // pdfService.setCurrentY(24)0;
  pdfService.setCurrentY(240);

  // drawText("Model Card Report - The organization", { isBold: true, fontSize: 20, column: "left", color: rgb(0, 0.53, 0.71) });
  pdfService.drawText("AI-Security Posture Management Report", {
    isBold: true,
    fontSize: 20,
    column: "left",
    color: rgb(0, 0.53, 0.71),
  });

  pdfService.drawText("- Lumbar Supply chain Managers", {
    isBold: true,
    fontSize: 20,
    column: "left",
    color: rgb(0, 0.53, 0.71),
  });

  pdfService.setCurrentY(10);
  pdfService.drawText("Report generated on - 08/08/2024", {
    fontSize: 12,
    column: "left",
  });
  // drawText("Report generated on - 24/10/2024", { fontSize: 12, column: "left" });

  // pdfService.setCurrentY(10);
  pdfService.setCurrentY(10);
  pdfService.drawText("Conducted By - FUSEFY", {
    fontSize: 12,
    column: "left",
  });

  pdfService.setCurrentY(240);

  pdfService.setCurrentY(180);

  pdfService.drawSubHeader("Table Of Content", "left");
  pdfService.setCurrentY(40);

  pdfService.drawWrappedText(
    "1. Executive Summary/Introduction .............................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "2. Model Overview ............................................................................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "3. Model Purpose and Functionality ......................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "4. Technical Details ...............................(1)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "5. Model Performance and Impact Assessment.............(2)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "6. Compliance and Governance...........(4)",
    "left",
    6
  );
  pdfService.setCurrentY(20);
  pdfService.drawWrappedText(
    "7. Recommendations and Next Steps...................................(5)",
    "left",
    6
  );
  pdfService.setCurrentY(20);

  pdfService.setCurrentY(410);

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
    "attachment; filename=risk-assessment-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
})


app.get('/risk-assessment-balance', async (req, res) => {
  await pdfService.init();

  pdfService.setCurrentY(70);
  const tbData2 = [
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
},
  ];
  pdfService.renderTable(tbData2, [50, 110,110,110,120]);
  pdfService.setCurrentY(40);
  
  

  const pdfBytes = await pdfService.generatePDF();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=risk-assessment-report.pdf"
  );
  res.send(Buffer.from(pdfBytes));
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

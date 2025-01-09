import { PDFDocument, PDFFont, PDFPage, RGB, rgb, StandardFonts } from "pdf-lib";
import path from "path";
import fs from "fs";
import fetch from "node-fetch";

class PdfService {
  public margin: number;
  public innerPadding: number;
  public columnWidth!: number;
  public width!: number;
  public height!: number;
  private tableFontSize: number;
  private tableX: number;
  private tableY: number;
  private tableMinRowHeight: number;
  private tablePadding: number;
  private tableColumnWidths: number[];
  public currentY!: number;
  public pdfDoc!: PDFDocument;
  public page!: PDFPage;
  private topHeaderFontSize: number;
  private headerFontSize: number;
  private subHeaderFontSize: number;
  private bodyFontSize: number;
  public font!: PDFFont;
  private boldFont!: PDFFont;

  public async init() {
    await this.createPdf();
    await this.initializeFonts();
  }

  constructor() {
    this.init()
      .then(() => {
        console.log("PDF initialized and fonts loaded.");
        this.columnWidth = this.width - 2 * this.margin - 2 * this.innerPadding;
        this.currentY = this.height - this.margin;
      })
      .catch((err) => {
        console.error("Error initializing PDF service:", err);
      });

    this.margin = 50;
    this.innerPadding = 10; // Padding inside the border
    this.topHeaderFontSize = 20;
    this.headerFontSize = 16;
    this.subHeaderFontSize = 12;
    this.bodyFontSize = 12;
    this.tableFontSize = 12;
    this.tableX = 50;
    this.tableY = 300;
    this.tableMinRowHeight = 25;
    this.tablePadding = 8;
    this.tableColumnWidths = [150, 310];
    this.tableFontSize = 12;
    this.tableX = 50;
    this.tableY = 300;
    this.tableMinRowHeight = 25;
    this.tablePadding = 8;
  }

  private async initializeFonts() {
    console.log("Initializing fonts...");
    this.font = await this.pdfDoc.embedFont(StandardFonts.Helvetica);
    this.boldFont = await this.pdfDoc.embedFont(StandardFonts.HelveticaBold);
  }

  private async addNewPage() {
    this.page = this.pdfDoc.addPage([595, 842]);
    this.width = this.page.getWidth();
    this.height = this.page.getHeight();
    this.currentY = this.height - this.margin; // Reset `currentY` for each new page
    await this.applyWatermarks(); // Ensure watermarks are applied on each new page
  }

  private addPageIfNeeded(fontSize: number) {
    if (this.currentY - fontSize < this.margin) {
      this.addNewPage();
      this.currentY = this.height - this.margin - 60;
    }
  }

  private async createPdf() {
    this.pdfDoc = await PDFDocument.create();
    await this.addNewPage();
    // this.page = this.pdfDoc.addPage([595, 842]);
    // this.height = this.page.getHeight();
    // this.width = this.page.getWidth();
    // this.currentY = this.height - this.margin;
    // this.applyWatermarks();
  }

  private fetchImageFromUrl = async (url: string): Promise<Buffer> => {
    const response = await fetch(url);
    const buffer = await response.buffer();
    return buffer;
  };

  public async addURLImage(imgURL: string, imgHeight?: number, imgWidth?: number,xCord?: number) {
    const imageBuffer = await this.fetchImageFromUrl(imgURL);
    const urlImage =
      imgURL.endsWith(".jpg") || imgURL.endsWith(".jpeg")
        ? await this.pdfDoc.embedJpg(imageBuffer)
        : await this.pdfDoc.embedPng(imageBuffer);

      imgHeight = imgHeight ? imgHeight : 150;

        if (this.currentY - imgHeight! < 50) {
            this.addNewPage();
            this.setCurrentY(50);
        }

    this.page.drawImage(urlImage, {
      x: xCord ? xCord : 70,
      y: imgHeight ?this.currentY - imgHeight :this.currentY - 150, // Adjust the image position
      width: imgWidth ?this.columnWidth * imgWidth :this.columnWidth * 0.9, // Adjust the image width
      height: imgHeight ?imgHeight :150, // Adjust the image height
    });
  }

  public async addLocalImage(imgPath: string, imgHeight?: number, imgWidth?: number,xCord?: number) {
    const image = path.resolve(imgPath);
    const urlImage =
      imgPath.endsWith(".jpg") || imgPath.endsWith(".jpeg")
        ? await this.pdfDoc.embedJpg(fs.readFileSync(image))
        : await this.pdfDoc.embedPng(fs.readFileSync(image));

    console.log(this.columnWidth);

    imgHeight = imgHeight ? imgHeight : 150;

    if (this.currentY - imgHeight! < 50) {
        this.addNewPage(); 
        this.setCurrentY(50);
    }

    this.page.drawImage(urlImage, {
      x: xCord ? xCord : 70,
      y: imgHeight ?this.currentY - imgHeight :this.currentY - 150, // Adjust the image position
      width: imgWidth ?this.columnWidth * imgWidth :this.columnWidth * 0.8, // Adjust the image width
      height: imgHeight ?imgHeight :150, // Adjust the image height
    });

    this.currentY -= imgHeight ? imgHeight : 160;
  }

  private async applyWatermarks() {
    const topHeaderImgPath = path.resolve("./assets/fusify-head.jpg");
    const FooterImgPath = path.resolve("./assets/fusify-foot.jpg");
    const logoImgPath = path.resolve("./assets/fusefy-logo.png");

    const topHeaderImg = await this.pdfDoc.embedJpg(
      fs.readFileSync(topHeaderImgPath)
    );
    const footerImg = await this.pdfDoc.embedJpg(
      fs.readFileSync(FooterImgPath)
    );
    const logoImg = await this.pdfDoc.embedPng(fs.readFileSync(logoImgPath));

    // Apply to all pages
    this.pdfDoc.getPages().forEach((page) => {
      const { width, height } = page.getSize();

      // Draw the logo first
      page.drawImage(logoImg, {
        x: (width - 120) / 2,
        y: (height - 120) / 2,
        width: 120,
        height: 120,
        opacity: 0.15,
      });

      // Then draw the top header image
      page.drawImage(topHeaderImg, {
        x: 0,
        y: height - 75,
        width: width,
        height: 75,
      });
      page.drawImage(footerImg, {
        x: 0,
        y: 0,
        width: width,
        height: 35,
      });
    });
  }

  public async generatePDF() {
    this.applyWatermarks();
    const pdfBytes = await this.pdfDoc.save();
    return pdfBytes;
  }

  public setCurrentY(currY: number) {
    this.currentY -= currY;
  }

  public setCurrYTop(currYTop: number) {
    this.currentY += currYTop;
  }

  public drawContentBorder = (
    xStart: number,
    yStart: number,
    contentHeight: number,
    isFullWidth?: boolean
  ) => {
    const boxWidth = isFullWidth
      ? this.width - 2 * this.margin
      : this.columnWidth + 2 * this.innerPadding;
    this.page.drawRectangle({
      x: xStart,
      y: yStart,
      width: boxWidth,
      height: contentHeight,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1,
    });
  };

  public drawText = (
    text: any,
    options: {
      isBold?: boolean;
      fontSize?: number;
      column: "left" | "right";
      xSpace?: number;
      color?: any;
    }
  ) => {
    const isBold = options.isBold || false;
    const fontSize = options.fontSize || 12;
    const textWidth = (isBold ? this.boldFont : this.font).widthOfTextAtSize(
      text,
      fontSize
    );

    let x = this.margin + this.innerPadding;
    if (options.column === "right") {
      x = this.margin + this.columnWidth + 2 * this.innerPadding;
    }

    this.addPageIfNeeded(fontSize);

    this.page.drawText(text, {
      x: options.xSpace ? x + options.xSpace : x,
      y: this.currentY,
      size: fontSize,
      font: isBold ? this.boldFont : this.font,
      color: options.color || rgb(0, 0, 0),
    });

    this.currentY -= fontSize * 1.2;
    return textWidth;
  };

  private wrapText(text: string, maxWidth: number): string[] {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (let word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const lineWidth = this.font.widthOfTextAtSize(
        testLine,
        this.tableFontSize
      );

      if (lineWidth < maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    lines.push(currentLine);
    return lines;
  }

  private drawCell(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    color: any, // Text color
    bgColor: any // Background color
) {
    // Draw cell background
    this.page.drawRectangle({
        x,
        y: y - height,
        width,
        height,
        color: bgColor, // Set background color
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
    });

    const lines = this.wrapText(text, width - 2 * this.tablePadding);
    let textY = y - this.tablePadding - this.tableFontSize;

    for (let line of lines) {
      this.page.drawText(line, {
        x: x + this.tablePadding,
        y: textY,
        color, // Use the passed text color
        size: this.tableFontSize,
        font: this.font,
      });
      textY -= this.tableFontSize + 2;
    }
  }
  

  public drawWrappedText = (
    text: any,
    column: "left" | "right",
    xSpace: number = 0,
    color? : RGB 
  ) => {
    const words = text.split(" ");
    let line = "";
    const maxWidth = this.columnWidth - xSpace; // Adjusted width to prevent overflow

    for (const word of words) {
      const testLine = line + (line ? " " : "") + word;
      const textWidth = this.font.widthOfTextAtSize(
        testLine,
        this.bodyFontSize
      );

      if (textWidth > maxWidth) {
        // Use maxWidth for boundary check
        this.drawText(line, { column, xSpace });
        line = word; // Start a new line
      } else {
        line = testLine;
      }
    }

    if (line) {
      this.drawText(line, { column, xSpace }); // Draw the last line
    }
  };

  public drawHeading = (
    text: any,
    column: "left" | "right",
    xSpace?: number
  ) => {
    this.drawText(text, {
      isBold: true,
      fontSize: this.headerFontSize,
      column,
      xSpace,
    });
  };

  public drawTopHeader = (
    text: any,
    column: "left" | "right",
    xSpace?: number,
    ySpace?: number
  ) => {
    this.drawText(text, {
      isBold: true,
      fontSize: this.topHeaderFontSize,
      column,
      xSpace,
    });
  };

  public drawSubHeader = (
    text: any,
    column: "left" | "right",
    xSpace?: number
  ) => {
    this.drawText(text, {
      isBold: true,
      fontSize: this.subHeaderFontSize,
      column,
      xSpace,
    });
  };

  public renderTable = (tableData: any, tableColumnWidths?: number[], x?: number) => {
    if (tableColumnWidths) this.tableColumnWidths = tableColumnWidths;

    for (let rowIndex = 0; rowIndex < tableData.length; rowIndex++) {
      const rowData = tableData[rowIndex];

      if (!rowData || !rowData.row || !rowData.color || !rowData.bgColor) {
        throw new Error(`Invalid row data at index ${rowIndex}: ${JSON.stringify(rowData)}`);
      }

      const { row, color, bgColor } = rowData;

      if (row.length !== color.length || row.length !== bgColor.length) {
        throw new Error(`Row, color, and bgColor lengths do not match at index ${rowIndex}`);
      }

      let cellHeights = [];

      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const cellWidth = this.tableColumnWidths[colIndex];
        const lines = this.wrapText(
          row[colIndex],
          cellWidth - 2 * this.tablePadding
        );
        const cellHeight = Math.max(
          lines.length * (this.tableFontSize + 2) + 2 * this.tablePadding,
          this.tableMinRowHeight
        );
        cellHeights.push(cellHeight);
      }

      const maxHeight = Math.max(...cellHeights);

      if (this.currentY - maxHeight < this.margin) {
          this.addNewPage();
          this.setCurrentY(40);
      }

      let currentX = this.tableX;
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        this.drawCell(
          currentX,
          this.currentY,
          this.tableColumnWidths[colIndex],
          maxHeight,
          row[colIndex],
          color[colIndex],
          bgColor[colIndex]
        );
        currentX += this.tableColumnWidths[colIndex];
      }

      this.currentY -= maxHeight;
    }
  };

  
  
}

const pdfService = new PdfService();

export default pdfService;

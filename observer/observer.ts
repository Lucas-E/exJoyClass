// Interface Observer
interface Observer {
    update(): void;
  }
  
  // Interface Subject
  interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
  
  // Classe concreta Subject (Editor)
  class Editor implements Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  // Subclasse da classe Editor chamada TextEditor
  class TextEditor extends Editor {
    private lines: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      if (lineNumber >= 0 && lineNumber <= this.lines.length) {
        this.lines.splice(lineNumber, 0, text);
        this.notifyObservers();
      } else {
        console.log("Número de linha inválido.");
      }
    }
  
    removeLine(lineNumber: number): void {
      if (lineNumber >= 0 && lineNumber < this.lines.length) {
        this.lines.splice(lineNumber, 1);
        this.notifyObservers();
      } else {
        console.log("Número de linha inválido.");
      }
    }
  
    getLines(): string[] {
      return [...this.lines];
    }
  }
  
  // Classe concreta Observer (ConsoleLogger)
  class ConsoleLogger implements Observer {
    constructor(private editor: Editor) {
      this.editor.addObserver(this);
    }
  
    update(): void {
      const lines = (this.editor as TextEditor).getLines();
      console.log("Conteúdo atualizado:");
      console.log(lines.join("\n"));
    }
  }
  
  // Aplicação principal
  const textEditor = new TextEditor();
  const consoleLogger = new ConsoleLogger(textEditor);
  
  console.log("Digite as linhas de texto. Digite 'EOF' para finalizar.");
  
  let lineNumber = 0;
  while (true) {
    const input = prompt(`Linha ${lineNumber + 1}: `);
    if (input && input.toUpperCase() !== "EOF") {
      textEditor.insertLine(lineNumber, input);
      lineNumber++;
    } else {
      break;
    }
  }
  
  textEditor.notifyObservers();
  console.log("Conteúdo salvo no arquivo:");
  
  // Aqui você pode adicionar a lógica para salvar no arquivo configurado.
  // Neste exemplo, apenas imprimimos o conteúdo no console.
  const lines = textEditor.getLines();
  console.log(lines.join("\n"));
  
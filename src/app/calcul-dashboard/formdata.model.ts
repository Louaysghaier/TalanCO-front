// work-data.model.ts

export class WorkData {
    A: number;
    B: number;
    C: number;
  
    constructor(A: number, B: number, C: number) {
      this.A = A;
      this.B = B;
      this.C = C;
    }
  }

  // alimentation-data.model.ts

export class AlimentationData {
    test: boolean;
  
    constructor(test: boolean) {
      this.test = test;
    }
  }
  // transport-data.model.ts

export class TransportData {
    A: number;
    B: number;
    C: number;
    
    constructor(A: number, B: number, C: number) {
        this.A = A;
        this.B = B;
        this.C = C;
      }
  }
  
  
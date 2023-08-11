export interface MyData {
  firstName: {
    val: string;
    isValid: boolean;
  };
  lastName: {
    val: string;
    isValid: boolean;
  };
  description: {
    val: string;
    isValid: boolean;
  };
  rate: {
    val: number | null;
    isValid: boolean;
  };
  areas: {
    val: string[];
    isValid: boolean;
  };
}

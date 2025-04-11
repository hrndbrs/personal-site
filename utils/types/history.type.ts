export type Education = {
  title: string;
  institution: string;
  period: string;
  type: EducationType;
  url?: string;
};

export enum EducationType {
  EDUCATION = "education",
  CERTIFICATION = "certification",
}

export type Work = {
  position: string;
  company: string;
  period: string;
  description: string;
  keypoints: string[];
};

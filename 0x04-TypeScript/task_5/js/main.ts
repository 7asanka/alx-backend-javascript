interface MajorCredits {
  credits: number;
  _brand: void;
}
interface MinorCredits {
  credits: number;
  _brand: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits){
  return { credits: subject1.credits + subject2.credits} as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

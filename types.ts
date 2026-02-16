
export interface Phase {
  id: string;
  title: string;
  objective: string;
  participants: string[];
  structure: string;
  focus?: string;
  capacity: string;
  status: 'current' | 'future';
  trigger?: string;
  requirements?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

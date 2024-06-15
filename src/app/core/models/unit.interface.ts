export interface Unit {
    id: number;
    title: string;
    content: string;
    opened: boolean;
    mask: string;
    towel: string;
    fountain: string;
    locker_room: string;
    street: string;
    region: string;
    city_name: string;
    uf: string;
    schedules: { weekdays: string; hour: string; formattedHours?: {start: number; end: number}}[];
  }
export type Board = {
  letters: string;
  worms: string;
  tray: string;
  opponent: string;
  fireballs: number;
  winner: string|null;
};

const DefaultBoard : Board = {
  letters: "",
  worms: "",
  tray: "",
  opponent: "Opponent",
  fireballs: 0,
  winner: null
};

export default DefaultBoard;
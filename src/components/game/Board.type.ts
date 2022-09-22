export type Board = {
  letters: string;
  worms: string;
  tray: string;
  opponent: string;
  fireballs: number;
};

const DefaultBoard : Board = {
  letters: "",
  worms: "",
  tray: "",
  opponent: "Opponent",
  fireballs: 0
};

export default DefaultBoard;
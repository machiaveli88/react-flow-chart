import styled from "styled-components";
import { IOnCanvasClick } from "../../";

export interface ICanvasInnerDefaultProps {
  children: any;
  onClick: IOnCanvasClick;
  tabIndex: number;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  className?: string;
}

export const CanvasInnerDefault = styled.div<ICanvasInnerDefaultProps>`
  position: relative;
  outline: 1px dashed rgba(0, 0, 0, 0.1);
  width: 10000px;
  height: 10000px;
  cursor: move;
` as any;

import styled from "styled-components";

export interface ICanvasOuterDefaultProps {
  children: any;
  ref?: React.Ref<any>;
  className?: string;
}

export const CanvasOuterDefault = styled.div<ICanvasOuterDefaultProps>`
  position: relative;
  background-size: 20px 20px;
  background-color: rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.2) 1px,
      transparent 0
    ),
    linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 1px, transparent 0);
  width: 100%;
  overflow: hidden;
  cursor: not-allowed;
` as any;

import { css } from '@emotion/react'

export const globalStyle = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;
    font-family: S-CoreDream;
    color: inherit;
    word-wrap: break-word;
    word-break: keep-all;

    background: #1e1e1e;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  li,
  ul {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`

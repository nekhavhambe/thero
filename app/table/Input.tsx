// import { css } from '@linaria/core';

// import type { RenderEditCellProps } from '../types';

// const textEditorInternalClassname = css`
//   @layer rdg.TextEditor {
//     appearance: none;

//     box-sizing: border-box;
//     inline-size: 100%;
//     block-size: 100%;
//     padding-block: 0;
//     padding-inline: 6px;
//     border: 2px solid #ccc;
//     vertical-align: top;
//     color: var(--rdg-color);
//     background-color: var(--rdg-background-color);

//     font-family: inherit;
//     font-size: var(--rdg-font-size);

//     &:focus {
//       border-color: var(--rdg-selection-color);
//       outline: none;
//     }

//     &::placeholder {
//       color: #999;
//       opacity: 1;
//     }
//   }
// `;

// export const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;

function autoFocusAndSelect(input: HTMLInputElement | null) {
  input?.focus();
  input?.select();
}

export default function textEditor({
  row,
  column,
  onRowChange,
  onClose
}: any) {
  return (
    <input
      ref={autoFocusAndSelect}
      value={row[column.key]}
      onChange={(event) => {
        document.querySelector('#save').style.display = 'flex'
        onRowChange({ ...row, [column.key]: event.target.value })}}
      onBlur={(e) => { 
        onClose(true, false)}}
    />
  );
}
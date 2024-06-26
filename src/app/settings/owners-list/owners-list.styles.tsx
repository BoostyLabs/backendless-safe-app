import { styled } from '@mui/system';

export const WrapperStyled = styled('div')(
  ({ theme }) => `
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column; 
    gap: ${theme.spacing(3.5)};
    margin-top: 1.5rem;
`
);

export const BodyAccountsStyled = styled('div')(
  ({ theme }) => `
display: flex;

@media (max-width: 1068px) {
  flex-wrap: wrap;
  gap: ${theme.spacing(3)};
}
`
);

export const BoxStyled = styled('div')(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
`
);

export const GridBtnStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const styledBtn = {
  width: 'fit-content',
  fontSize: '14px',
};

export const styledCSV = {
  textDecoretion: 'none',
  color: 'transparent',
};

export const ConfirmationsStyled = styled('div')(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)}
`
);

export const BodyListAccountsStyled = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: auto;
  max-height: 350px;
`;

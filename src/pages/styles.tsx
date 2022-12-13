import styled from 'styled-components'

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & button {
    height: 25px;
    padding: 0px 15px;
    font-size: 12px;
    &:first-child {
      margin-right: 16px;
    }
  }
`

export const PageTitle = styled.h4`
  color: #0064a9;
  font-size: 16px;
  font-weight: bold;
`

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const SubTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`

export const SubTitleSmall = styled(SubTitle)`
  font-size: 12px;
  text-transform: none;
  margin-top: 8px;
`

export const PageBadge = styled.span`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-size: 12px;
  padding: 4px 12px;
`
export const PageSection = styled.section`
  border: 2px solid #e5e5e5;
  padding: 16px 20px;
  margin-bottom: 20px;
  hr {
    background-color: #c4c4c4;
  }
`

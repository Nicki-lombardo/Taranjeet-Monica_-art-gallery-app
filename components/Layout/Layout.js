
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-top: 4rem; 
`;

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Header /> 
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  );
}

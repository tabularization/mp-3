import { styled } from "styled-components";
import { useEffect } from "react";

const ReferencesContainer = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ReferencesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ReferenceItem = styled.li`
  padding: 3vh 0;
  display: flex;
  align-items: center;
  gap: 0 5vw;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RefContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    margin-top: 1.5vh;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  padding: 0.3vh 0;
`;

const ReferenceImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;

  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
`;

export default function References() {
  useEffect(() => {
    document.title = "References | My Resume";
  }, []);
  return (
    <ReferencesContainer>
      <h1>References</h1>
      <ReferencesList>
        <ReferenceItem>
          <ReferenceImage
            src="https://plus.unsplash.com/premium_vector-1721637089734-41fe62116d5e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Minimalist illustration of person with cap"
          />
          <RefContainer>
            <h3>John Doe</h3>
            <Paragraph>
              <strong>Position:</strong> Senior Software Engineer
            </Paragraph>
            <Paragraph>
              <strong>Company:</strong> NYC DDC
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> johndoe@gmail.com
            </Paragraph>
            <Paragraph>
              <strong>Phone:</strong> (123) 456-7890
            </Paragraph>
            <Paragraph>
              <strong>Relation:</strong> Former Manager
            </Paragraph>
          </RefContainer>
        </ReferenceItem>

        <ReferenceItem>
          <ReferenceImage
            src="https://plus.unsplash.com/premium_vector-1721637089626-4a94b07ec3d6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Minimalist illustration of a person with blonde hair"
          />
          <RefContainer>
            <h3>Jane Smith</h3>
            <Paragraph>
              <strong>Position:</strong> Data Analyst
            </Paragraph>
            <Paragraph>
              <strong>Company:</strong> Microsoft
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> janesmith@microsoft.com
            </Paragraph>
            <Paragraph>
              <strong>Phone:</strong> (987) 654-3210
            </Paragraph>
            <Paragraph>
              <strong>Relation:</strong> Mentor from CodePath
            </Paragraph>
          </RefContainer>
        </ReferenceItem>

        <ReferenceItem>
          <ReferenceImage
            src="https://plus.unsplash.com/premium_vector-1721637089678-0042adca08a3?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Minimalist illustration of woman"
          />
          <RefContainer>
            <h3>Michael Johnson</h3>
            <Paragraph>
              <strong>Position:</strong> IT Manager
            </Paragraph>
            <Paragraph>
              <strong>Company:</strong> NYC DYCD
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> michael.johnson@nycddc.com
            </Paragraph>
            <Paragraph>
              <strong>Phone:</strong> (555) 987-6543
            </Paragraph>
            <Paragraph>
              <strong>Relation:</strong> Former Supervisor
            </Paragraph>
          </RefContainer>
        </ReferenceItem>
      </ReferencesList>
    </ReferencesContainer>
  );
}

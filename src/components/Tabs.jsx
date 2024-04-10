export default function Tabs({ buttons, children, buttonContainer }) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

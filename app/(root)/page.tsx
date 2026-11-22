export const instant = false;

function simulatingDelay(ms: number) {
  return new Promise(rs => setTimeout(rs, ms));
}

export default async function Homepage() {
  await simulatingDelay(2000);

  return (
      <>Prostore</>
  );
}
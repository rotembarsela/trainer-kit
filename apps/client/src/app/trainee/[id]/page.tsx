export default async function Trainee({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <main>{id}</main>;
}

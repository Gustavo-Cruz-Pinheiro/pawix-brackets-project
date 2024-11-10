import { Seed, SeedItem, SeedTeam, SeedTime, IRenderSeedProps } from '@pawix/react-brackets';
import './styles.css';

const RenderSeed = ({ breakpoint, seed }: IRenderSeedProps) => {
  const formattedDate = seed.date
    ? new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(new Date(seed.date))
    : 'Data não disponível';

  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem style={{ width: '95%' }}>
        <div className="seed-container">
          <SeedTeam className="seed-team">
            <span>{seed.teams?.[0]?.name || 'W.O'}</span>
            {seed.teams?.[0]?.score !== undefined && (
              <span className="seed-score">
                {seed.teams[0].score}
              </span>
            )}
          </SeedTeam>
          <div className="seed-divider"></div>
          <SeedTeam className="seed-team">
            <span>{seed.teams?.[1]?.name || 'W.O'}</span>
            {seed.teams?.[1]?.score !== undefined && (
              <span className="seed-score">
                {seed.teams[1].score}
              </span>
            )}
          </SeedTeam>
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint} style={{ fontSize: 9 }}>
        {formattedDate}
      </SeedTime>
    </Seed>
  );
};

export default RenderSeed;

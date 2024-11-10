import { Bracket, IRoundProps } from '@pawix/react-brackets';
import RenderSeed from '../RenderSeed';

const rounds: IRoundProps[] = [
  {
    title: 'Round 1',
    seeds: [
      {},
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [
          { id: 1, name: 'The Leons', score: 2 },
        ],
      },
      {},
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [
          { id: 1, name: 'The Leons', score: 2 },
        ],
      },
    ],
  },
  {
    title: 'Round 2',
    seeds: [...new Array(2)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 3, name: 'Kitties', score: 6 },
      ],
    }),
  },
  {
    title: 'Round 3',
    seeds: [...new Array(1)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 3, name: 'Kitties', score: 6 },
      ],
    }),
  },
];

const SingleElimination = () => (
  <Bracket
    mobileBreakpoint={767}
    rounds={rounds}
    renderSeedComponent={RenderSeed}
    swipeableProps={{ enableMouseEvents: true, animateHeight: true }}
  />
);

export default SingleElimination;

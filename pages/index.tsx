import Head from 'next/head';
import Image from 'next/image';
import { getLaunches, Launch } from '../services/spacex';
import { Dataset } from '../components/Dataset';
import { Status } from '../components/Status';
import { Card } from '../components/Card';
import { Grid } from '../components/Grid';

type Props = {
  launches: Launch[];
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Launches</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="heading">Launches</h1>
      {props.launches.length ? (
        <Grid>
          {props.launches.map((launch: Launch) => {
            return (
              <Card
                key={launch.id}
                title={
                  <>
                    <Image
                      src={launch.links?.patch.small}
                      alt={`${launch.name} Mission Patch`}
                      width={128}
                      height={128}
                    />
                    <h2>{launch.name}</h2>
                  </>
                }
              >
                <Dataset title="Date">
                  <p>{new Date(launch.date_utc).toDateString()}</p>
                </Dataset>
                <Dataset title="Time">
                  <p>{new Date(launch.date_utc).toTimeString()}</p>
                </Dataset>
                <Dataset title="Core">
                  <p>{launch.cores?.[0].core.serial}</p>
                </Dataset>
                <Dataset title="Payloads">
                  <ul>
                    {launch.payloads.map((payload) => (
                      <li key={payload.id} title={payload.id}>
                        {payload.type}
                      </li>
                    ))}
                  </ul>
                </Dataset>
                <Dataset title="Status">
                  <Status success={launch.success} />
                </Dataset>
                {launch.failures.length > 0 && (
                  <Dataset title="Reason">
                    <ul>
                      {launch.failures.map((failure) => (
                        <li key={failure.reason}>{failure.reason}</li>
                      ))}
                    </ul>
                  </Dataset>
                )}
              </Card>
            );
          })}
        </Grid>
      ) : (
        <p>Failed to fetch Launches</p>
      )}
    </>
  );
}

export async function getStaticProps() {
  const launches = await getLaunches({ limit: 10 });
  return { props: { launches } };
}

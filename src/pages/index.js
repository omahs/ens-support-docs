import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
	return <Redirect to="/docs" />;
};

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="ENS Support Docs">
//       <main>
//         <section class={styles.features}>
//           <HomepageFeatures />
//           <SearchBar />
//         </section>
//         {/*<section className={styles.infoCards}>
//             <center>
//               <HomepageInfoCardsRow />
//             </center>
//             </section>*/}
//       </main>
//     </Layout>
//   );
// }

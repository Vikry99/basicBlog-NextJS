import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


export default function Home () {
  return (
    <Layout pageTitle='Home Page'>
      <div className="Image-profile">
      <Image src="/profile.png" width={200} height={200} />
      </div>
    
    <h1 className={styles['title-homepage']} >Welcome Vikry Ramadhan</h1>
    <p className='paragraft'>Elon Reeve Musk FRS EE-lon; born June 28, 1971 is a business magnate, investor, and philanthropist. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$265 billion as of May 2022,[4] Musk is the wealthiest person in the world according to both the Bloomberg Billionaires Index and the Forbes real-time billionaires list.[5][6] Musk was born to a Canadian mother and White South African father, and raised in Pretoria, South Africa. He briefly attended the University of Pretoria before moving to Canada at age 17. He matriculated at Queen's University and transferred to the University of Pennsylvania two years later, where he received a bachelor's degree in Economics and Physics. He moved to California in 1995 to attend Stanford University but decided instead to pursue a business career, co-founding the web software company Zip2 with his brother Kimbal. The startup was acquired by Compaq for $307 million in 1999. The same year, Musk co-founded online bank X.com, which merged with Confinity in 2000 to form PayPal. The company was bought by eBay in 2002 for $1.5 billion. In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he serves as CEO and Chief Engineer. In 2004, he joined electric vehicle manufacturer Tesla Motors, Inc. (now Tesla, Inc.) as chairman and product architect, eventually assuming the position of CEO in 2008. In 2006, he helped create SolarCity, a solar energy company that was later acquired by Tesla and became Tesla Energy. In 2015, he co-founded OpenAI, a nonprofit research company that promotes friendly artificial intelligence (AI). In 2016, he co-founded Neuralink, a neurotechnology company focused on developing brain–computer interfaces, and founded The Boring Company, a tunnel construction company. He also agreed to purchase the major American social networking service Twitter in 2022 for $44 billion. Musk has proposed the Hyperloop, a high-speed vactrain transportation system. He is the president of the Musk Foundation, an organization which donates to scientific research and education. Musk has been criticized for making unscientific and controversial statements, such as spreading misinformation about the COVID-19 pandemic. In 2018, he was sued by the U.S. Securities and Exchange Commission (SEC) for falsely tweeting that he had secured funding for a private takeover of Tesla; he settled with the SEC but did not admit guilt, and temporarily stepped down from his Tesla chairmanship. In 2019, he won a defamation case brought against him by a British caver who had advised in the Tham Luang cave rescue.</p>
    </Layout>
  )
}

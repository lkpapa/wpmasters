import Image from 'next/image'
import styles from './page.module.css';
import dynamic from 'next/dynamic';
const HomeSlider = dynamic(() => import('./components/HomeSlider'), {
  loading: () => <p>Loading...</p>,
})
// import HomeSlider from './components/HomeSlider'
//import './styles/style.scss'
async function getData() {
	const res = await fetch(`https://wpmasters20.kinsta.cloud/wp-json/api/v1/pages/?page_name=homepage`)
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data')
	}
	return res.json()
  }
export async function generateMetadata({ params, searchParams }) {
	return {
		title: 'WP masters',
		description: 'My description about',
	}
}
export default async function Home() {
	const data = await getData()
	return (
		<HomeSlider slider={data}/>
	  )
  }
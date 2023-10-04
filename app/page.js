import Image from 'next/image'
import styles from './page.module.css'
import HomeSlider from './components/HomeSlider'
//import './styles/style.scss'
export async function generateMetadata({ params, searchParams }) {
	return {
		title: 'WP masters',
		description: 'My description about',
	}
}
export default function Home() {
  return (
    <HomeSlider/>
  )
}

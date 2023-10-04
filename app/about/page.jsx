import React from 'react'
export async function generateMetadata({ params, searchParams }) {
	return {
		title: 'My title About',
		description: 'My description about',
	}
}
function About() {
  return (
    <div>
      About Page
    </div>
  )
}

export default About;

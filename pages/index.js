import MySpeedInsightComponent from '../components/MySpeedInsightComponent'; // Correct path as necessary

export default function HomePage() {
  return (
    <div>
      {/* Your page content */}
      <MySpeedInsightComponent />
    </div>
  );
}

// Example using getServerSideProps in pages/index.js
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}

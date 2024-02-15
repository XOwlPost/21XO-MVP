import MySpeedInsightComponent from '../components/MySpeedInsightComponent'; // Adjust the import path based on your file structure

export default function HomePage() {
  return (
    <div>
      {/* Your page content */}
      <MySpeedInsightComponent />
    </div>
  );
}
const app = require('./app')
const {PORT}=process.env
app.listen(PORT,() =>{
    console.log(`Server is running at port:${PORT}`);
})
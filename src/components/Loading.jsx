import { BarLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="page-container">
      <BarLoader
          color="#FF6B00"
          size={50}
          cssOverride={{
              'margin': 'auto'
          }}
      />
    </div> 
  )
}

export default Loading

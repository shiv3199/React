const Body = ({message,sender})=>{
return (
    <>
    <div>
    {sender =='robot' && "🤖"}
    {message}
    {sender =='user' && "🧑"}
    </div>
    </>
)
}
export default Body
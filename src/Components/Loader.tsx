import CircularProgress from '@mui/material/CircularProgress';





const Loader: React.FC = () => {
    return (
        <section className='loader'>
            <CircularProgress color='secondary'/>
        </section>
    )
}

export { Loader };
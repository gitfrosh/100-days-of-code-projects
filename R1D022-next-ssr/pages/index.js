// this is handled like a React component without all the imports and
// stuff, just with Next.js
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <div style={{ color: 'red' }}>
            <h1>SSR Power</h1>
            {/* <a href="/about"></a> this is a server-side route (full new GET reload)*/}
            <Link href="/about">
                <a>About</a>
            </Link>
            <p>
            {
                props.robots.map(robot => 
                <p><Link href={`robots/${robot.id}`}>
                    <a>{robot.name}</a>
                </Link></p>)
            }
            </p>
        </div>
    )
}
Index.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        robots: data
    }
}

export default Index;


import Layout from "../../components/Layout";

interface User{
  id : number;
  name : string;
  email : string;
  website : string;
  phone : string;
}

interface UserDetailProps {
  user : User;
}

export default function UserDetail(props : UserDetailProps) {

  const {user} = props; 
  return (
    <Layout pageTitle='Users Detail Page'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user:User) => ({
    params : {
      id : user.id.toString(),
    },

  }));
  return {
    paths,
    fallback: false, 
  }
}

interface GetStaticProps {
  params : {
    id : string;
  }
}

export async function getStaticProps(context : GetStaticProps) {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

 
  return {
    props : {
      user,
    },
  };
}
import React from "react";

const Users = ({ value }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (value !== null)
      fetch(`https://api.github.com/users/${value}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    console.log(dados);
  }, [value]);

  return (
    <div className="userProfile">
      <div className="nameProfile">
        <h2>
          {dados && dados.name} - {dados && dados.login}
        </h2>
      </div>
      <div className="imgProfile">
        <img src={dados && dados.avatar_url} alt="Profile Picture" />
      </div>
      <div className="gitHub">
        <img src="./github-mark.svg" />
      </div>
      <div className="aboutProfile">
        <div className="detailsProfile">
          <h5>Following </h5>
          <p>{dados && dados.following}</p>
        </div>
        <div className="detailsProfile">
          <h5>Type</h5> <p>{dados && dados.type}</p>
        </div>

        <div className="detailsProfile">
          <h5>Followers</h5> <p>{dados && dados.followers}</p>
        </div>
      </div>
    </div>
  );
};

export default Users;

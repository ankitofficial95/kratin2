function isUserLoggedIn()
{
    if(sessionStorage.getItem("isLoggedIn")!=null)
    {
        if(sessionStorage.getItem("isLoggedIn") == "true")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}


function getUserName()
{
  return  sessionStorage.getItem("userName");
}


function setSessionStorage(userName)
{
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("isLoggedIn", "true");
}

function clearStorage()
{
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("isLoggedIn");
}

function HandleStorage()
{
    return {    isUserLoggedIn, 
                getUserName, 
                setSessionStorage,
                clearStorage }
}

export default HandleStorage;
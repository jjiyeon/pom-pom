import * as UI from './style'
const Contacts = () => {
  return (
    <UI.ContactContainer>
      <UI.Title>Contacts</UI.Title>
      <UI.SearchContainer>
        <UI.Wrapper>
          <UI.Search>{/* <Image /> */}</UI.Search>
          <UI.Sorting>Sort</UI.Sorting>
        </UI.Wrapper>

        <UI.ContactsUsers>
          <UI.UserList>
            {Array.from({ length: 10 }).map((item, idx) => {
              return (
                <UI.User key={idx}>
                  <UI.UserImage>Image</UI.UserImage>
                  <UI.Name>Summer {idx}</UI.Name>
                </UI.User>
              )
            })}
          </UI.UserList>
        </UI.ContactsUsers>
      </UI.SearchContainer>
    </UI.ContactContainer>
  )
}

export default Contacts

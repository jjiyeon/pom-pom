import * as UI from './style'
import Image from 'next/image'

const Contacts = () => {
  return (
    <UI.ContactContainer>
      <UI.Title>Contacts</UI.Title>
      <UI.SearchContainer>
        <UI.Wrapper>
          <UI.IconWrapper>
            <Image src="/contacts/icn-search.svg" alt="search icon" width={16} height={16} />
          </UI.IconWrapper>
          <UI.Search placeholder="Search contact" />

          <UI.Sorting>
            <UI.SortIcon>
              <Image src="/contacts/icn-sort.svg" alt="search icon" width={12} height={14} />
            </UI.SortIcon>
            Sort
          </UI.Sorting>
        </UI.Wrapper>

        <UI.ContactsUsers>
          <UI.UserList>
            {Array.from({ length: 10 }).map((item, idx) => {
              return (
                <UI.User key={idx}>
                  <UI.UserImage>
                    <Image src={`/contacts/2.png`} width={42} height={42} alt="dummy user" />
                  </UI.UserImage>
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

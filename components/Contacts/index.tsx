import Link from 'next/link'
import * as UI from './style'
import Image from 'next/image'

const dummyFirends = [
  {
    name: 'Shawn',
    image: '/contacts/1.png',
  },
  {
    name: 'Jordan',
    image: '/contacts/2.png',
  },
  ,
  {
    name: 'Vlad',
    image: '/contacts/3.png',
  },
  ,
  {
    name: 'Summer',
    image: '/contacts/4.png',
  },
  {
    name: 'Maxi',
    image: '/contacts/5.png',
  },
]

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
            {dummyFirends.map((item, idx) => {
              return (
                <UI.User key={idx}>
                  <Link href="/Chat">
                    <UI.UserImage>
                      <Image src={`${item?.image}`} width={42} height={42} alt="dummy user" />
                    </UI.UserImage>
                    <UI.Name>{item?.name}</UI.Name>
                  </Link>
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

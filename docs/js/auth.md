This project uses a fine-grained based [CBAC](https://stackoverflow.com/questions/22814023/role-based-access-control-rbac-vs-claims-based-access-control-cbac-in-asp-n ) permission control scheme.


### how to use

Taking the ContributorList component as an example, assuming that this is not a public component, we use the [withGuardian](https://github.com/coderplanets/coderplanets_web/blob/dev/components/HOC/withGuardian.js) high-level component to wrap the ContributorList Export:

```js
Const ContributorList = ({ users, readOnly, addContributor }) => (
  <Wrapper>
    ...
  </Wrapper>
)

ContributorList.propTypes = {
 ...
}

ContributorList.defaultProps = {
 ...
}

Export default withGuardian(ContributorList)
```

WithGuardian receives some permission-related parameters, the most important of which is the passport. Other containers or components can pass permission information when calling ContributorList:

```js
<ContributorList
  Passport="root"
  fallbackProps="readOnly"
  Users={contributors}
  addContributor={addContributor}
/>
```
This component is not displayed if the permissions are not met. The fallbackProps parameter is optional, meaning that the component is used to display the component if the permission is not met.

Permission-related content is worthy of a detailed discussion, I will take the time to complete the document.

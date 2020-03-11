本项目使用细粒度的基于 [CBAC](https://stackoverflow.com/questions/22814023/role-based-access-control-rbac-vs-claims-based-access-control-cbac-in-asp-n) 的权限控制方案。

### 如何使用

以 ContributorList 组件为例， 假设这不是一个公开的组件，我们使用 [withGuardian](https://github.com/coderplanets/coderplanets_web/blob/dev/components/HOC/withGuardian.js) 高阶组件将 ContributorList 包裹导出：

```js
const ContributorList = ({ users, readOnly, addContributor }) => (
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

export default withGuardian(ContributorList)
```

withGuardian 接收一些权限相关的参数，其中最重要的一个是 passport。其他容器或组件在调用 ContributorList 的时候可以传入权限信息：

```js
<ContributorList
  passport="root"
  fallbackProps="readOnly"
  users={contributors}
  addContributor={addContributor}
/>
```

权限不满足则不显示该组件。其中 fallbackProps 参数为可选，意思是如果权限不满足则使用该属性显示组件。

权限相关的内容值得详谈，我会抽时间补全文档。

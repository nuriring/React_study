//post의 경우 title과 body만 보여주고, user의 경우 username과 email만 보여줌
const Sample = ({ loadingPost, loadingUsers, post, users}) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩 중...'}
        {/* post 객체가 유효할 때 만 그 내부의 post.title 등의 값을 보여줌 */}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
          )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중...'}
        {/* null 값에 대해 map 함수를 호출할 때 오류가 발생할 수 있으므로 유효성 검사필요 */}
        {!loadingUsers && users && (
          <ul>
            {users.map(user => (<li key={user.id}>
              {user.username} ({user.email})
            </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Sample
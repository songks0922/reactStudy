function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    {
      //createElement 는 리액트 요소를 반환한다.
      onClick: () => setLiked(!liked),
    },
    text,
  );
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(LikeButton), domContainer);

React.createElement(
  'div',
  null,
  React.createElement('p', null, 'hello'),
  React.createElement('p', null, 'world'),
);

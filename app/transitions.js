export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('user'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};

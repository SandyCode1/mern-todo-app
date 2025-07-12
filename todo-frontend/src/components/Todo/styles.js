const styles = {
  appContainer: {
  width: '100vw',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: 'rgba(255, 240, 248, 0.9)',
  backgroundImage: `linear-gradient(rgba(255, 240, 248, 0.7), rgba(255, 240, 248, 0.7)), url('https://i.pinimg.com/474x/a4/b9/b0/a4b9b0b983ab6c435d1368cf63d8aba0.jpg?nii=t')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflowX: 'hidden',
  boxSizing: 'border-box',
},
  header: {
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '2.6rem',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(255, 182, 193, 0.5)',
  },
  inputSection: {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px'
  },
  input: {
    flex: 1,
    padding: '14px 18px',
    border: '2px solid #ffb6c1',
    borderRadius: '25px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff9fb',
    boxShadow: '0 0 5px rgba(255, 105, 180, 0.2)',
  },
  button: {
    padding: '12px 22px',
    background: 'linear-gradient(to right, #ffb6c1, #ff69b4)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(255, 182, 193, 0.4)',
    transition: 'transform 0.2s',
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: '#fff9fa',
    borderRadius: '18px',
    marginBottom: '15px',
    border: '1px solid #ffd1dc',
    boxShadow: '0 4px 10px rgba(255, 192, 203, 0.2)',
    transition: 'all 0.3s ease-in-out',
  },
  completed: {
    textDecoration: 'line-through',
    color: '#d8bfd8',
    backgroundColor: '#ffe4f0',
  },
  todoText: {
    flex: 1,
    cursor: 'pointer',
    marginRight: '15px',
    fontSize: '1.1rem',
    color: '#ff69b4',
    fontWeight: '500',
  },
  todoActions: {
    display: 'flex',
    gap: '8px'
  },
  editInput: {
    flex: 1,
    padding: '10px 14px',
    border: '2px solid #ffb6c1',
    borderRadius: '18px',
    backgroundColor: '#fff9fa',
    fontSize: '1rem'
  },
  saveButton: {
    backgroundColor: '#98fb98',
    color: '#444',
    fontWeight: '600',
    borderRadius: '20px',
  },
  editButton: {
    backgroundColor: '#ffd700',
    color: '#444',
    fontWeight: '500',
    borderRadius: '20px',
  },
  deleteButton: {
    backgroundColor: '#ff9999',
    color: 'white',
    fontWeight: '500',
    borderRadius: '20px',
  }
};

export default styles;

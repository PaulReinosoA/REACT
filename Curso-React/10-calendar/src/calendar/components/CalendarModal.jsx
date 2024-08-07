import { differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale/es';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2';
import { useUiStore } from '../../store/hooks/useUiStore';
import { useCalendarStore } from '../../store/hooks/useCalendarStore';

registerLocale('es', es);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const { isDateModalOpen, clouseDateModal } = useUiStore();
  // const [isOpen, setIsOpen] = useState(true); //*isDateModalOpen lo remplaza
  const [formSubmited, setformSubmited] = useState(false);

  const [formValues, setformValues] = useState({});

  const titleClass = useMemo(() => {
    if (!formSubmited) return '';

    return formValues.title.length > 0 ? 'is-valid' : 'is-invalid';
  }, [formValues.title, formSubmited]);

  useEffect(() => {
    if (activeEvent !== null) {
      setformValues({ ...activeEvent }); // esparcimos propiedades creando un new obj
    }
  }, [activeEvent]);

  const onDateChanged = (event, changing) => {
    setformValues({
      // no sobre escribo mas que el valor cambiado en el formulario
      ...formValues,
      [changing]: event,
    });
  };

  const onInputChange = ({ target }) => {
    setformValues({
      // no sobre escribo mas que el valor cambiado en el formulario
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModal = () => {
    console.log('cerrando modal');
    clouseDateModal();
    // setIsOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setformSubmited(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fehas', 'error');
      return;
    }
    if (formValues.title.length <= 0) return;
    console.log(formValues);
    // todo:
    await startSavingEvent(formValues);
    clouseDateModal();
    setformSubmited(false);
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
        </div>
        <div className="form-group mb-2">
          <DatePicker
            selected={formValues.start}
            onChange={(event) => onDateChanged(event, 'start')}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
        </div>
        <div className="form-group mb-2">
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => onDateChanged(event, 'end')}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            value={formValues.title}
            onChange={onInputChange}
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

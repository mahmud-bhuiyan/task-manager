import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };

  const onCancel = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add New Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full rounded"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            className="w-full rounded"
            {...register("description", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            className="w-full rounded"
            {...register("date", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="assignedTo">Assigned To</label>
          <select
            className="w-full rounded"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mahmud">Mahmud</option>
            <option value="Kamrul">Kamrul</option>
            <option value="Towhid">Towhid</option>
            <option value="Munna">Munna</option>
            <option value="Arrafi">Arrafi</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full rounded"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button className="btn btn-danger" onClick={() => onCancel()}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;

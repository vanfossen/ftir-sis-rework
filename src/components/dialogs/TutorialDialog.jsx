import PropTypes from "prop-types";
import Dialog from "./Dialog.jsx";

function TutorialDialog({ isTutorial, toggleTutorial }) {
  return (
    <Dialog isOpen={isTutorial} toggleClose={toggleTutorial}>
      <div className="mx-5 flex flex-col items-center p-3 text-center">
        <h1 className="pb-3 text-4xl font-bold underline">Tutorial</h1>
        <div className="text-md text-start">
          <p>
            {`A sed autem eveniet omnis sit. Omnis molestiae est aliquam aut tempore. Aperiam ea perferendis sit unde porro omnis excepturi. Facilis sit nihil sequi nostrum maxime soluta. Sapiente in accusantium laudantium labore. Praesentium id error a possimus id.`}
          </p>
          <ol className="list-decimal px-5 py-5">
            <li>
              {`Beatae non fugit nihil delectus ea voluptas. Deleniti qui qui molestiae et deserunt. Quod molestiae inventore ad quisquam consectetur perspiciatis voluptatum. Numquam cupiditate ut temporibus sit voluptatem. Repellat unde nobis blanditiis tempora qui sed.`}
            </li>
            <li>
              {`Placeat voluptas omnis ipsa est. Saepe odit eaque repellat fugit a sed. Dolorem animi iure qui et veniam. Sequi fuga et eos autem. In odit nobis facere sed repellat. Quis eum in minima mollitia eius.`}
            </li>
            <li>
              {`Qui aut sint dignissimos qui architecto. Distinctio laudantium voluptas consequuntur rerum adipisci nobis corporis vel. Fugit et ea quod asperiores temporibus. Cum animi eos omnis sed. Ut et qui quidem aut a neque enim. Officia voluptates voluptatem dolorem est voluptatem deserunt.`}
            </li>
          </ol>
        </div>
      </div>
    </Dialog>
  );
}

// PropTypes declaration
TutorialDialog.propTypes = {
  isTutorial: PropTypes.bool,
  toggleTutorial: PropTypes.func,
};

export default TutorialDialog;
